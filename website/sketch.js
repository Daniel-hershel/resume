// 
// Create divs for skills

// div class = holder 
let skills = 

[

 {skill: "HTML & CSS", score: 9 },
 {skill: "JavaScript", score: 8},
 {skill: "Velocity.js (animation)", score: 8 },
 {skill: "p5.js", score:9},
 {skill: "Python", score: 6 },
 {skill: "Data Visualization", score: 6 },
 {skill: "Wordpress", score: 7 },

]
// let sco


console.log(skills)




skills.forEach((element, index)=>{

	let selector = $('.skillz')
	let circlesOne = $("<div>", {class: "circlesOne"})
	let circlesTwo = $("<div>", {class: "circlesTwo"})



	for (var i =0; i< element.score; i++){
	console.log(element.score)
	let newCircleOne = $("<div>", {class: "circleFilled"})
	circlesOne.append(newCircleOne)

	}

		for (var i = 0; i < 10; i++){
	let newCircleTwo = $("<div>", {class: "circle"})
	circlesTwo.append(newCircleTwo)
		
	}



	let skill = $('<div>' + element.skill  + '</div>')
	// let skill = $('<div class = "skill">'+ element.skill + ', ', + element.score + '</div>')

	

	selector.append(circlesTwo)
	selector.append(circlesOne)
	selector.append(skill)





	console.log(element.skill)
// create dom element for each
// create the circles viz
})