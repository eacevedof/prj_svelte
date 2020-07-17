<main class="container">
	<h1>My tools</h1>
  <div>
    <h3>Domains:</h3>
    <select value={seldomain} on:change="{() => seldom = "" }">
      {#each ardomains as obj}
        <option value={obj.value}>{obj.text}</option>
      {/each}
    </select>
  </div>

  {#if seldom=="" }
  <form on:submit|preventDefault={handleSubmit} class="row">
    <div class="mb-3">
      <label class="form-label">renew password for:</label>
      <input type="text" class="form-control " value={word}/>
    </div>
    <div class="mb-12">
      <button type="submit" class="btn btn-primary mb-3">submit</button>
    </div>
  </form>
  {/if}
  
  <hr/>
  <form action="https://upload.theframework.es/security/login" method="post">
    <input type="text" name="user" id="txt-user" value="uploader"/><br/><br/>
    <input type="text" name="password" id="txt-password" value="" /><br/><br/>
    <button type="submit">submit</button>
  </form>
  <hr/>
  <form action="https://upload.theframework.es/upload" method="post" enctype="multipart/form-data">
    <h1>Upload in localhost:4000/upload</h1>
    <label>One</label>
    <input type="file" name="fil-one" id="fil-one"/><br/><br/>
    <label>Two</label>
    <input type="file" name="fil-two" id="fil-two"/><br/><br/>
    <input type="text" name="folderdomain" value="tinymarket.es">
    <input type="text" name="resource-usertoken" id="txt-resource-usertoken"
          value="WU5pU2Q1WTNrUm1Qa1puMUg1NUYvbCtvcEYvMzZ4RGJHUlFKYW9mUlNhUDc5SVJIMC9TL20zM1BwaWNMKy9rNlJQSVA4RXV4WnJlNzVyTkxiRzk1OG1meFluclAvNXpTNzV3Znp6aVVVOVA5NFNYWmNpclhaZGVQcEJZbzRkNzQ="
    /><br/><br/>
    <button type="submit">submit</button>
  </form>
</main>

<script>
//props
let word = "menganito"
let ardomains = [
  {value:"",text:""},
  {value:"https://upload.theframework.es/security/get-password",text:"Upload / get-password"},
  {value:"https://upload.theframework.es/security/login",text:"Upload / login"},
  {value:"https://upload.theframework.es/upload",text:"Upload / files"},
]
let seldomain = ""
let seldom = ""

$: seldomain
$: seldom

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