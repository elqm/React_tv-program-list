export function getDramaList() {

    const dramaList =
        fetch('https://api.tvmaze.com/schedule?country=KR&date')
            .then(res => res.json())

    // console.log(dramaList);
    return dramaList;
}

export function getDramaDetail(id) {

    const dramaDetail =
        fetch(`https://api.tvmaze.com/schedule?country=KR&date`)
            .then(res => res.json())
            .then(resDetail => resDetail.filter(drama => drama.show.id === parseInt(id))[0])

    return dramaDetail;
}

// export function getDramaDateDetail(date, id) {

//     const dramaDateDetail =
//         fetch(`https://api.tvmaze.com/schedule?country=KR&date${date}`)
//             .then(res => res.json())
//             .then(resDetail => resDetail.filter(drama => drama.show.id === parseInt(id))[0])

//     console.log(dramaDateDetail);
//     return dramaDateDetail;
// }

export function getCastDetail(id) {

    const castDetail =
    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
        .then(res => res.json())
    
    // console.log(castDetail);

    return castDetail;
}

export function getDramaDateList(dramaDate) {

    const dramaDateList =
        fetch(`https://api.tvmaze.com/schedule?country=KR&date=${dramaDate}`)
            .then(res => res.json())

    // console.log(dramaDate);
    return dramaDateList;
}

export function getCountryDateList(dramaCountry, dramaDate) {

    const countryDateList =
        fetch(`https://api.tvmaze.com/schedule?country=${dramaCountry}&date=${dramaDate}`)
            .then(res => res.json())

    // console.log(dramaDate);
    return countryDateList;
}

export function getDramaNameList(dramaName) {

    const dramaNameList =
        fetch(`https://api.tvmaze.com/search/shows?q=${dramaName}`)
            .then(res => res.json())

    // console.log(dramaDate);
    return dramaNameList;
}

// export function getSeasons(sId) {

//     const season =
//     fetch(`https://api.tvmaze.com/shows/${sId}/seasons`)
//         .then(res => res.json().length)
    
//     console.log(season);

//     return season;
// }