class MovieService {

    constructor() {
		this.movies=[
			{
				id: 1,
				title: "Blade Runner",
				year: 1982,
				genres: [ 'Sci-Fi', 'Thriller' ],
				rating: 8.2,
				image: 'images/movie1.jpg',
				plot: "In the futuristic year of 2019, Los Angeles has become a dark and depressing metropolis, filled with urban decay. Rick Deckard, an ex-cop, is a \"Blade Runner\". Blade runners are people assigned to assassinate \"replicants\". The replicants are androids that look like real human beings. When four replicants commit a bloody mutiny on the Off World colony, Deckard is called out of retirement to track down the androids. As he tracks the replicants, eliminating them one by one, he soon comes across another replicant, Rachel, who evokes human emotion, despite the fact that she's a replicant herself. As Deckard closes in on the leader of the replicant group, his true hatred toward artificial intelligence makes him question his own identity in this future world, including what's human and what's not human."
			},
			{
				id: 2,
				title: "The Cabin in the Woods",
				year: 2012,
				genres: [ 'Fantasy', 'Horror', 'Mystery' ],
				rating: 7.0,
				image: 'images/movie2.jpg',
				plot: "Five teenagers head off for a weekend at a secluded cabin in the woods. They arrive to find they are quite isolated with no means of communicating with the outside world. When the cellar door flings itself open, they of course go down to investigate. They find an odd assortment of relics and curios, but when one of the women, Dana, reads from a book, she awakens a family of deadly zombie killers. However, there's far more going on than meets the eye."
			},
			{
				id: 3,
				title: "Event Horizon",
				year: 1997,
				genres: [ 'Horror', 'Sci-Fi', 'Thriller' ],
				rating: 6.7,
				image: 'images/movie3.jpg',
				plot: "In the year 2047 a group of astronauts are sent to investigate and salvage the long lost starship \"Event Horizon\". The ship disappeared mysteriously 7 years before on its maiden voyage and with its return comes even more mystery as the crew of the \"Lewis and Clark\" discover the real truth behind its disappearance and something even more terrifying."
			},
			{
				id: 4,
				title: "Star Wars: Episode VII - The Force Awakens",
				year: 2015,
				genres: [ 'Action', 'Adventure', 'Fantasy' ],
				rating: 8.2,
				image: 'images/movie4.jpg',
				plot: "30 years after the defeat of Darth Vader and the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue stormtrooper and two smugglers, are thrown into the middle of a battle between the Resistance and the daunting legions of the First Order."
			},
			{
				id: 5,
				title: "Ghost Busters",
				year: 1984,
				genres: [ 'Adventure', 'Comedy', 'Fantasy' ],
				rating: 7.8,
				image: 'images/movie5.jpg',
				plot: "Three odd-ball scientists get kicked out of their cushy positions at a university in New York City where they studied the occult. They decide to set up shop in an old firehouse and become Ghostbusters, trapping pesky ghosts, spirits, haunts, and poltergeists for money. They wise-crack their way through the city, and stumble upon a gateway to another dimension, one which will release untold evil upon the city. The Ghostbusters are called on to save the Big Apple."
			}
		];
    }
	
	getMovies() {
		return this.movies;
	}
	
	getMovie(id) {
		return this.movies.find(m => m.id==id);
	}
}

export default MovieService;