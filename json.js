<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animais Perdidos e Encontrados</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .post {
            border: 1px solid #ccc;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
        }
        .post img {
            max-width: 100px;
            border-radius: 8px;
        }
        .post h2 {
            margin-top: 0;
        }
        .post p {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <h1>Animais Perdidos e Encontrados</h1>
    <div id="posts"></div>

    <script>
        const data = {
            "posts": [
                [1, "Lost Dog", "Small brown dog lost in the park", "/images/post1.png", 1, "Park City", "Lost", "Buddy", "Dog", "Male", "Brown", "Small"],
                [2, "Found Cat", "Found a black and white cat", "/images/post2.png", 2, "Downtown", "Found", "Whiskers", "Cat", "Female", "Black and White", "Medium"],
                [3, "Missing Parrot", "Green parrot missing near downtown area", "/images/post3.png", 3, "Downtown", "Lost", "Polly", "Parrot", "Male", "Green", "Small"],
                [4, "Found Dog", "Golden retriever found near the river side", "/images/post4.png", 4, "River Side", "Found", "Goldie", "Dog", "Female", "Golden", "Large"],
                [5, "Lost Cat", "Grey cat lost last night", "/images/post5.png", 5, "Suburbs", "Lost", "Shadow", "Cat", "Male", "Grey", "Medium"],
                [6, "Found Bird", "Small bird found in the garden", "/images/post6.png", 6, "Garden Area", "Found", "Tweety", "Bird", "Female", "Yellow", "Small"],
                [7, "Lost Dog", "Black labrador missing", "/images/post7.png", 7, "Park City", "Lost", "Blacky", "Dog", "Male", "Black", "Large"],
                [8, "Found Cat", "White cat found sleeping in a barn", "/images/post8.png", 8, "Old Town", "Found", "Snowy", "Cat", "Female", "White", "Medium"],
                [9, "Lost Rabbit", "White rabbit lost in the neighborhood", "/images/post9.png", 9, "Hilltop", "Lost", "Bunny", "Rabbit", "Male", "White", "Small"],
                [10, "Found Dog", "Husky with blue eyes found wandering streets", "/images/post10.png", 10, "Downtown", "Found", "Sky", "Dog", "Male", "Grey", "Large"]
            ]
        };

        const postsContainer = document.getElementById('posts');

        data.posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';

            const image = document.createElement('img');
            image.src = post[3];
            postElement.appendChild(image);

            const title = document.createElement('h2');
            title.textContent = post[1];
            postElement.appendChild(title);

            const description = document.createElement('p');
            description.textContent = post[2];
            postElement.appendChild(description);

            const details = document.createElement('p');
            details.textContent = `Location: ${post[5]}, Status: ${post[6]}, Name: ${post[7]}, Type: ${post[8]}, Gender: ${post[9]}, Color: ${post[10]}, Size: ${post[11]}`;
            postElement.appendChild(details);

            postsContainer.appendChild(postElement);
        });
    </script>
</body>
</html>
