const xhr = new XMLHttpRequest();
const url = "./news.json";

xhr.open('GET',url,true);
xhr.responseType='json'

xhr.onload = () =>{
    const news = xhr.response.news
    const newsDiv = document.getElementById('news');

    news.forEach( (nnew) => {
        const nnewDiv = document.createElement('div');
        nnewDiv.classList.add('article');

        const title =  document.createElement('h2');
        title.textContent=nnew.title;

        const description = document.createElement('p');
        description.textContent= nnew.description;

        const ways_to_achieve_ul= document.createElement('ul');

        nnew.ways_to_achieve.forEach( (nnnew) =>{
        const ways_to_achieve_li = document.createElement('li');
        ways_to_achieve_li.textContent= nnnew;
        ways_to_achieve_ul.appendChild(ways_to_achieve_li);
        });

        const benefits_ul= document.createElement('ul');

        nnew.benefits.forEach( (nnnew) =>{
        const benefits_li= document.createElement('li');
        benefits_li.textContent= nnnew;
        benefits_ul.appendChild(benefits_li);
        });

        
        nnewDiv.appendChild(title);
        nnewDiv.appendChild(description);
        nnewDiv.appendChild(ways_to_achieve_ul);
        nnewDiv.appendChild(benefits_ul);

        newsDiv.appendChild(nnewDiv);
    });
}
xhr.send();