<main class="container">
	<h1>My tools</h1>
  <div class="row">
    <div class="mb-3">
      <label class="form-label">Action:</label>
      <select bind:value={seldomain}>
        {#each ardomains as objdomain}
          <option value={objdomain.value}>{objdomain.text}</option>
        {/each}
      </select>
    </div>
  </div>

  {#if seldomain.includes("/get-password")}
  <h3>Hash it</h3>
  <form on:submit|preventDefault={handleSubmit} class="row">
    <div class="mb-3">
      <label class="form-label">Word to be hashed:</label>
      <input type="text" class="form-control " bind:value={hashit.word}/>
    </div>
    <div class="mb-12">
      <button type="submit" class="btn btn-primary mb-3">submit</button>
    </div>
  </form>
  {/if}
  
  {#if seldomain.includes("/login")}
  <h3>Get token</h3>
  <form on:submit|preventDefault={handleSubmit} class="row">
    <div class="mb-3">
      <label class="form-label">User</label>
      <input type="text" class="form-control " bind:value={login.user}/>
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input type="text" class="form-control " bind:value={login.password}/>
    </div>    
    <div class="mb-12">
      <button type="submit" class="btn btn-primary mb-3">submit</button>
    </div>
  </form>
  {/if}

  {#if seldomain.includes("es/upload")}
  <h3>Upload</h3>
  <form on:submit|preventDefault={handleSubmit} class="row">
    <div class="mb-3">
      <label class="form-label">File one</label>
      <input type="file" class="form-control" bind:value={upload.one}/>
    </div>
    <div class="mb-3">
      <label class="form-label">File two</label>
      <input type="file" class="form-control" bind:value={upload.two}/>
    </div>
    <div class="mb-3">
      <label class="form-label">Folder</label>
      <input class="form-control" bind:value={upload.folder}/>
    </div>
    <div class="mb-3">
      <label class="form-label">Token</label>
      <input class="form-control" bind:value={upload.usertoken}/>
    </div>    
    <div class="mb-12">
      <button type="submit" class="btn btn-primary mb-3">submit</button>
    </div>
  </form>
  {/if}

  <div class="row">
    <h3>Resume</h3>
    <ul>
      <li><b>Word:</b><br/><span>{resume.hashit.word}</span></li>
      <li><b>Hashed:</b><br/><span>{resume.hashit.wordhashed}</span></li>
      
      <br/>
      <li><b>User:</b><br/><span>{resume.login.user}</span></li>
      <li><b>Password:</b><br/><span>{resume.login.password}</span></li>
      <li><b>Login token:</b><br/><span>{resume.login.token}</span></li>
      
      <br/>
      <li><b>file-1:</b><br/><span>{resume.upload.one}</span></li>
      <li><b>file-2:</b><br/><span>{resume.upload.two}</span></li>
      <li><b>Folder:</b><br/><span>{resume.upload.folder}</span></li>
      <li><b>Usertoken:</b><br/><span>{resume.upload.usertoken}</span></li>
      <li><b>Result:</b><br/><code>{JSON.stringify(resume.upload.result.warning)}</code></li>
      <li><b>Result urls:</b><br/>{get_htmllinks(resume.upload.result.url)}</li>

    </ul>
  </div>
</main>

<script>
//props
let hashit = {
  word: "",
  wordhashed: ""
}

let login = {
  user: "",
  password: "",
  token:""
}

let upload = {
  one: "",
  two: "",
  folder: "",
  usertoken: "",
  result: {
    url: {},
    warning:[]
  },
}

$:resume = {
  hashit,
  login,
  upload
}

let ardomains = [
  {value:"",text:"...choose action"},
  {value:"https://upload.theframework.es/security/get-password",text:"Upload / get-password"},
  {value:"https://upload.theframework.es/security/login",text:"Upload / login"},
  {value:"https://upload.theframework.es/upload",text:"Upload / files"},
]

let seldomain = ""

const is_defined = mxvar => typeof(mxvar) !== "undefined"

const get_htmllinks = objurl => {
  const keys = Object.keys(objurl)
  let html = ""
  keys.forEach(key => {
    html += `<a src="${objurl[key]}" target="_blank">${key} - ${objurl[key]}</a><br/>`
  })
  return html
}


//methods
const handleSubmit = evt => {
  console.log("handleSubmit.evt",evt)
  const url = seldomain

  const data = new FormData()
  data.append("word",hashit.word)
  data.append("user",login.user)
  data.append("password",login.password)
  data.append("folderdomain",upload.folder)
  data.append("resource-usertoken",upload.usertoken)

  const inputfiles = document.querySelectorAll("input[type='file']")
  console.log("inputfiles",inputfiles)
  if(inputfiles)
    inputfiles.forEach((elem,i) => {
      const file = elem.files
      console.log("file[0]:",file[0])
      data.append("file_"+i,file[0])
    })

  fetch(url, {
    method: 'post',
    body: data
  })
  .then(response => response.json())
  .then(response => {
    console.log("reponse",response)
    if(response.errors.length == 0){
      if(is_defined(response.data.result)) resume.hashit.wordhashed = response.data.result
      if(is_defined(response.data.token)) {
        resume.login.token = response.data.token
        resume.upload.usertoken = response.data.token
      }
      if(is_defined(response.data.url)){
        resume.upload.result.url = response.data.url
      }

      if(is_defined(response.data.warning)){
        resume.upload.result.warning = response.data.warning
      }

      if(seldomain.includes("es/upload")){
        Swal.fire({
          icon: 'success',
          title: 'Upload finished',
          text: JSON.stringify(resume.upload.result.url),
        })        
      }
    } 
    else {
      Swal.fire({
        icon: 'warning',
        title: 'Esta acción no se ha podido completar',
        text: JSON.stringify(response.errors),
      })
    }
  })
  .catch(error => {
    console.log("error catched:",error)
    Swal.fire({
        icon: 'error',
        title: 'Vaya! Ha ocurrido un error',
        text: error.toString(),
    })
  })
}// handleSubmit
</script>

<style>
</style>