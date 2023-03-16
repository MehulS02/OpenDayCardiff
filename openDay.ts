const api_url: string = "OpenDay.json";

let object_content: any;

function toStartWith(): void {
    console.log('Starting');

    fetch('./OpenDay.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            object_content = data;
            document.getElementById("heading_div").innerHTML = (data.description);
            const topics = data.topics;
            for (let i = 0; i < topics.length; i++) {
                const option = document.createElement('option');
                option.setAttribute('value', topics[i].name);
                option.innerHTML = topics[i].name;
                document.getElementById("names").appendChild(option);
            }
        })
}

function myFunction(): void {
    document.getElementById('demo').innerHTML = "";
    const x = (<HTMLInputElement>document.getElementById("names")).value;

    for (let i = 0; i < object_content.topics.length; i++) {
        if (object_content.topics[i].name === x) {

            const programs = object_content.topics[i].programs;
            for (let j = 0; j < programs.length; j++) {
                const program = programs[j];
                const div_element = document.createElement('div');
                let result_string: string = 'Program Title: ' + program.title + '\n';
                result_string += 'Description: ' + program.description_short + '\n';

                //load image
                const img_element = document.createElement('img');
                const img_url = program.location.cover_image;
                img_element.setAttribute('src',img_url);
                img_element.setAttribute('alt',program.title);
                img_element.width = 300;
                img_element.height = 300;

                if (program.school === true) {
                    result_string += 'Is a school: Yes\n';
                }
                else {
                    result_string += 'Is a school: No\n';
                }

                result_string += 'Room: ' + program.room + '\n';
                result_string += 'Floor: ' + program.floor + '\n\n';
                result_string += 'Location: ' + program.location.title + '\n';
                result_string += 'Location Description: ' + program.location.description + '\n';
                result_string += 'Address: ' + program.location.address + '\n';
                result_string += 'Postcode: ' + program.location.postcode + '\n';
                result_string += 'Website: ' + program.location.website + '\n';

                if (program.location.accessible === 1) {
                    result_string += 'Is it Accessible: Yes\n';
                }
                else {
                    result_string += 'Is it Accessible: No\n';
                }

                if (program.location.parking === 1) {
                    result_string += 'Parking available: Yes\n';
                }
                else {
                    result_string += 'Parking available: No\n';
                }

                if (program.location.bike_parking === 1) {
                    result_string += 'Bike parking available: Yes\n';
                }
                else {
                    result_string += 'Bike parking available: No\n';
                }

                const line_break = document.createElement('br');
                div_element.innerText = result_string;
                img_element.setAttribute('class','coverImg');
                div_element.setAttribute('class', 'sub_div');
                document.getElementById("demo").appendChild(line_break);
                document.getElementById("demo").appendChild(img_element);
                document.getElementById("demo").appendChild(div_element);
                document.getElementById("demo").appendChild(line_break);
            }

        }
    }
}