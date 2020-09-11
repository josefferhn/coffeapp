// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:true
	},
	cache:false,
	cacheDuration: 0,
	modalTitle: 'CoffeeApp',
	dialog: {
		title: 'CoffeeApp',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;


$$('#btnComprar').on('click', function () {
  app.dialog.alert('¡ Tu compra fue realizada correctamente !');
});


$$('#btnConfirmar').on('click', function () {
  app.dialog.confirm('¿Seguro desea procesar su compra?', function () {
    app.dialog.alert('¡ Tu compra fue realizada correctamente !');
  });
});









 

