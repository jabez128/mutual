/**
 * mutual is a simple library implementing JavaScript two way data bind
 * 
 */
var Mu = function(view){
	var self = this;
	view.oninput = function(){
		self.value = this.value;
	}
	Object.defineProperty(self,'value',{
		set : function(value){
			view.value = value;
			console.log(value);
		},
		get: function(){
			return view.value;
		}
	});
}