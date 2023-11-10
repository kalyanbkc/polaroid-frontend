import React, { useEffect, useState } from 'react'
import "../styles/Home.css"
import { useAppSelector } from '../app/hooks'
import getTrendingMovies from "../api/getTrendingMovies"
import getNowPlaying from "../api/getNowPlaying"
import getUpcoming from "../api/getUpcoming"

const Home = () => {

    const [latest, setLatest] = useState({})
    const [nowPlaying, setNowPlaying] = useState({})
    const [upcomingData, setUpcomingData] = useState({})
    const [popularThisWeek, setPopularThisWeek] = useState({})

    const user = useAppSelector((state) => state.user)

    const fetchData = async () => {
        const latestData = await getTrendingMovies()
        setLatest(latestData.results)
        const nowPlayingData = await getNowPlaying()
        setLatest(nowPlayingData.results)
        const upcomingData = await getUpcoming()
        setLatest(upcomingData.results)
        const popularThis = await getTrendingMovies()
        setLatest(latestData.results)
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <>
    <div class="backdrop-image-container">
    <div class="backdrop-image"></div>
    </div>
    <h2 class="headline">
      Track films you've watched.
      <br/>
      Save those you want to see.
      <br/>
      Tell your friends what's good.
    </h2>
    {/* <% if (check===false) { %> */}
    {user.isLoggedIn && 
      <button type="button" class="getstarted-button" onclick="location.href='/user/register'">get started &mdash; it's free!</button>
    }
    <div class="top-text-div">
      The social network for film lovers.
      {/* <% if (check===false) { %> */}
      {!user.isLoggedIn && 
        <>
            Already a member? 
            <a href="/user/login">Sign in</a>
        </>
        }
    </div>
    <div class="grid-container1" id="header-list">
      {/* <% for( let index = 0; index < 6; index++ ) { %> */}
        <script>
          {/* var href = '<%- JSON.stringify(results) %>' */}
          console.log(href)
        </script>
        {/* <div class="grid-img-container1"> <a href= <%= "/film/" + results[index].id %>  > <img class="grid-img1" src=<%= "https://image.tmdb.org/t/p/original/" + results[index].poster_path %> alt="image"> </a> </div> */}
      {/* <% } %> */}
    </div>

    <div class="feature-container">
      <div class="feature-tag-line-container">
        <h2 class="feature-tag-line">polaroid lets you...</h2>
      </div>
      <div class="feature-elements-container">
        <div class="element element1">
          <div class="element-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
            </svg>
          </div>
          <div class="elementfeature-description">
            <div>
              Keep track of every flim you've ever watched
              (or just start from the day you join)
            </div>
        </div>
        </div>
        <div class="element element2">
          <div class="element-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
          </div>
          <div class="elementfeature-description">
            <div>
              Show some love for your favorite films,
              lists and reviews with a “like”
            </div>
          </div>
        </div>
        <div class="element element3">
          <div class="element-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-list-columns-reverse" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 .5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10A.5.5 0 0 1 4 .5Zm-4 2A.5.5 0 0 1 .5 2h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 8h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Z"/>
            </svg>
          </div>
          <div class="elementfeature-description">
            <div>
              Write and share reviews, and follow friends
              and other members to read theirs
            </div>
          </div>
        </div>
        <div class="element element1">
          <div class="element-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
          </div>
          <div class="elementfeature-description">
            <div>
              Rate each film on a five-star scale (with halves)
              to record and share your reaction
            </div>
          </div>
        </div>
        <div class="element element2">
          <div class="element-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
          </div>
          <div class="elementfeature-description">
            <div>
              Keep a diary of your film watching (and upgrade to
              <strong>Pro</strong> for comprehensive stats)
            </div>
          </div>
        </div>
        <div class="element element3">
          <div class="element-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-grid-fill" viewBox="0 0 16 16">
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
            </svg>
          </div>
          <div class="elementfeature-description">
            <div>
              Compile and share lists of films on any topic and
              keep a watchlist of films to see
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header">in theatres</div>
    <div class="grid-container">
      {/* <% for( let index = 0; index < 12; index++ ) { %> */}
        {/* <div class="grid-img-container2"> <a href= <%= "/film/" + playing[index].id %> > <img class="grid-img" src=<%= "https://image.tmdb.org/t/p/original/" + playing[index].poster_path %> alt="image"> </a> </div> */}
      {/* <% } %> */}
    </div>
    <div class="header">upcoming</div>
    <div class="grid-container">
      {/* <% for( let index = 0; index < 12; index++ ) { %> */}
        {/* <div class="grid-img-container3"> <a href = <%= "/film/" + upcoming[index].id %> > <img class="grid-img" src=<%= "https://image.tmdb.org/t/p/original/" + upcoming[index].poster_path %> alt="image"> </a> </div> */}
      {/* <% } %> */}
    </div>
    <div class="">
      <h2 class="mid-header">
        Write and share reviews. Compile your own lists.
        Share your life in film.
      </h2>
      <div class="mid-description">
        Below are some popular reviews and lists from this week.
      </div>
      <div class="mid-description">
        {/* <% if (check===false) { %> */}
        <a href="register.html">Sign up</a>&nbsp; to create your own.
        {/* // <% } %> */}
      </div>
    </div>
    <div class="section-heading">
      <div>popular this week</div>
      <a href="/films">more</a>
    </div>
    {/* // <% for( let index = 0; index < 3; index++ ) { %> */}
      <div class="element-container">
        <div class="film-image-container">
          {/* <img class="film-image" src=<%= "https://image.tmdb.org/t/p/original/" + popular[index].poster_path %> alt="image"> */}
        </div>
        <div class="film-content">
          <div class="film-header">
            {/* <a class="film-name" href=<%= '/film/' + popular[index].id %> > <%= popular[index].title %> </a> */}
            {/* <div class="film-year"> <%= popular[index].release_date.slice(0,4) %> </div> */}
          </div>
          <div class="film-desc">
            Directed by
            {/* <div class="film-director"> <%= popular.directors[index] %> </div> */}
          </div>
        </div>
      </div>
    {/* <% } %> */}
    </>
  )
}

export default Home