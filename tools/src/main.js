import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
    //App tiene export name 
		name: 'world'
	}
});

export default app;