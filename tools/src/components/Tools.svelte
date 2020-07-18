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

  <!-- {#if is_seldomain("/get-password")} -->
  {#if seldomain.includes("/get-password")}
  <h3>Hash it</h3>
  <form on:submit|preventDefault={handleSubmit} class="row">
    <div class="mb-3">
      <label class="form-label">Hash your word:</label>
      <input type="text" class="form-control " value={word}/>
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
      <input type="text" class="form-control " value={user}/>
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input type="text" class="form-control " value={password}/>
    </div>    
    <div class="mb-12">
      <button type="submit" class="btn btn-primary mb-3">submit</button>
    </div>
  </form>
  {/if}

  {#if seldomain.includes("es/upload")}
  <h3>Test upload</h3>
  <form on:submit|preventDefault={handleSubmit} class="row">
    <div class="mb-3">
      <label class="form-label">File one</label>
      <input type="file" class="form-control" value={file.one}/>
    </div>
    <div class="mb-3">
      <label class="form-label">File two</label>
      <input type="file" class="form-control" value={file.two}/>
    </div>
    <div class="mb-3">
      <label class="form-label">Folder</label>
      <input class="form-control" value={file.folder}/>
    </div>
    <div class="mb-3">
      <label class="form-label">Token</label>
      <input class="form-control" value={file.usertoken}/>
    </div>    
    <div class="mb-12">
      <button type="submit" class="btn btn-primary mb-3">submit</button>
    </div>
  </form>
  {/if}
  <div class="row">
    <h3>Resume</h3>
    <ul>
      <li><b>User:</b><span>{resume.hashit.user}</span></li>
      <li><b>Word:</b><span>{resume.hashit.word}</span></li>
      <li><b>Hashed:</b><span>{resume.hashit.hashed}</span></li>

      <li><b>Login token:</b><span>{resume.login.token}</span></li>
      <li><b>result:</b><span>{resume.upload.result}</span></li>
    </ul>
  </div>
</main>

<script>
//props
let word = "menganito"
let user = ""
let password = ""

let file = {
  one: "",
  two: "",
  folder: "",
  usertoken: "",
}

let resume = {
  hashit:{
    user: "",
    word: "",
    hashed: "",
  },
  login:{
    token: "",
  },
  upload:{
    result:[]
  },
}

let ardomains = [
  {value:"",text:"...choose action"},
  {value:"https://upload.theframework.es/security/get-password",text:"Upload / get-password"},
  {value:"https://upload.theframework.es/security/login",text:"Upload / login"},
  {value:"https://upload.theframework.es/upload",text:"Upload / files"},
]

//$: seldomain = ""
let seldomain = ""

const is_seldomain = slug => {
  console.log("slug:",slug,seldomain.includes(slug))
  return seldomain.includes(slug)
}

//methods
const handleSubmit = evt => {
  console.log("handleSubmit.evt",evt)

  const url = "https://upload.theframework.es/security/get-password"
  const data = new FormData()
  data.append("word",word)  

  fetch(url, {
    method: 'post',
    body: data
  })
  .then(response => response.json())
  .then(response => {
    console.log("reponse",response)
    if(response.title == "success"){
      Swal.fire({
        icon: 'success',
        title: 'Enhorabuena! <br/> Subscripción realizada correctamente',
        html: response.description
      })
    } 
    else {
      Swal.fire({
        icon: 'warning',
        title: 'Esta acción no se ha podido completar',
        text: response.description,
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