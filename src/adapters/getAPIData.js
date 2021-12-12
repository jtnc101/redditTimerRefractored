// api call 

export default async function getAPIData( url ) {

    const response = await fetch(url);
    const data = await response.json();
    return data;

}
