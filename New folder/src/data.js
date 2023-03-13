export const accounts = [
	{id: 1, "name": "Alice"},
	{id: 2, "name": "Bob"},
	{id: 3, "name": "Claire"},
]

export const blogposts = [
	{id: 1, authorId: 1, "title": "Alice's adventure Part 1"},
	{id: 2, authorId: 2, "title": "My birthday!"},
	{id: 3, authorId: 1, "title": "Alice's adventure Part 2"},
]

export const comments = [
	{id: 1, blogpostId: 1, commenterId: 2, content: "Exciting, can't wait for Part 2!"},
	{id: 2, blogpostId: 2, commenterId: 1, content: "Happy birthday Bob!"},
	{id: 3, blogpostId: 2, commenterId: 3, content: "🎉🎂"},
]