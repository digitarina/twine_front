# twine_palvelin

## Tietoja

Muokattu versio twinejs-softasta. Alkuperäinen softa löytyy osoitteesta https://github.com/klembot/twinejs 

## Asennus

Tuore asennus, Ubuntu 16.04.5 LTS.

    sudo apt-get update
    sudo apt-get upgrade
    sudo apt-get install npm git curl nodejs build-essential make zsh
    git clone https://github.com/digitarina/twine_palvelin.git
    mv twine_palvelin/ /var
    cd /var/twine_palvelin/
    curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
    sudo apt install nodejs
    npm install
    npm start

nyt palvelin toimii portissa 8080, ctrl-C pysäyttää palvelun.

Twinen voi buildata komennolla

	npm run build
	
jolloin valmis buildi tulee build-kansioon. Tämän voi siirtää muualle haluttuun weppikansioon, esim. https://github.com/digitarina/twine_palvelin_2

* Huom! Share-toiminto on konffattu toimimaan localhostissa. Jos haluat käyttää palvelinta, vaihda localhostin tilalle IP tai verkko-osoite src/file/post.js -tiedostossa.
