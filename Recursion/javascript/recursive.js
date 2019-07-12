/* Recursive Function- Replace var child = data.(what you want to go through in the data tree) */
const printAliasesRecursive = (data) => {
	/* Base case */
	if(data.children.length === 0) { 
		return;
	}
		/* Changing case */
	data.children.forEach(child => {
		console.log(child.name);
		printAliasesRecursive(child);
	})
}

var GameOfThronesData = {
	name: "Rickard Stark",
	children: [
		{
			name: "Ned Stark",
			children: [
				{name: "Robb Stark", children:[]},
				{name: "Sansa Stark", children:[]},
				{name: "Arya Stark", children:[]},
				{name: "Bran Stark", children:[]},
				{name: "Rickon Stark", children:[]}
			]
		}
	]
}
