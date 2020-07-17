<main>
	<h1>My tools</h1>
  <form on:submit|preventDefault={handleSubmit} action="https://upload.theframework.es/security/get-password" method="post">
    <label>renew password for:</label>
    <input type="text" name="word" id="txt-word" value={word}/><br/><br/>
    <button type="submit">submit</button>
  </form>
  <hr/>
  <form action="https://upload.theframework.es/security/login" method="post">
    <input type="text" name="user" id="txt-user" value="uploader"/><br/><br/>
    <input type="text" name="password" id="txt-password" value="++IUpload@10M++" /><br/><br/>
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
let word = "menganito"
const handleSubmit = (e)=>{
  console.log("handleSubmit.e",e)
}
</script>

<style>
</style>