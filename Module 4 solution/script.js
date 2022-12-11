var names=new Array();
names[0]="Ryuo";
names[1]="Jotaro";
names[2]="Jonny";
names[3]="joseph";
names[4]="Aki";
names[5]="dio";
names[6]="guts";
names[7]="Griffith";
names[8]="luffy";
names[9]="josuke";
names[10]="erwin";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}