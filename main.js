
const App = new Vue({

	el:"#app",
	data: {

		step: 1,
		totalsteps: 3,
		error:[],

		form: {
			name:null,
			email:null,
			message:null
		}
	},

	methods: {
		previousStep:function(){
			this.step--;
		},
		nextStep:function(){
			if(this.step == 1){
				if(!this.form.name){
					this.error = "Oops, looks like your name is missing";
					return false;
				}
			}

			if(this.step == 2){
				if(!this.form.email){
					this.error = "Oops, looks like your email is missing";
					return false;
				}
			}

			this.step++;
		},
		submitform0:function()
		{

			if(this.step == 3)
			{
				if(!this.form.message)
				{
					this.error = "Oops, looks like your message is missing";
					return false;
				}
			}
			this.errors = null;
			alert('Thank you!');
		}
	}
});
