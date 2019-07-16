<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="x-ua-compatible" name="Description" content="ie=edge">
    <title>{{title}}</title>
    <style>
        body{
            margin: 30px;
        }

        a{
            display: block;
            font-size: 30px;
        }
    </style>
</head>
<body>
{{#each files}}
    <a href="{{../dir}}/{{this}}">{{this}}</a>
{{/each}}
</body>
</html>