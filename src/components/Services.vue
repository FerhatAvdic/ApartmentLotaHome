<template>
  <div id="Services">
    <v-container  grid-list-md class="services-grid">
      <v-layout row wrap>
        <v-flex d-flex xs12 sm4 md4>
          <div>
            <i class="material-icons">hotel</i>
            <h2>{{vmText.captitle}}</h2>
            <p>{{vmText.capinfo}}</p>
          </div>
        </v-flex>
        <v-flex d-flex xs12 sm4 md4>
          <div>
            <i class="material-icons">view_quilt</i>
            <h2>{{vmText.roomtitle}}</h2>
            <p>{{vmText.roominfo}}</p>
          </div>
        </v-flex>

        <v-flex d-flex xs12 sm4 md4>
          <div>
            <i class="material-icons">wifi</i>
            <h2>{{vmText.wifititle}}</h2>
            <p>{{vmText.wifiinfo}}</p>
          </div>
        </v-flex>
        <v-flex d-flex xs12 sm4 md4>
           <div>
             <i class="material-icons">accessible</i>
            <h2>{{vmText.accesstitle}}</h2>
            <p>{{vmText.accessinfo}}</p>
          </div>
        </v-flex>
        <v-flex d-flex xs12 sm4 md4>
          <div>
            <i class="material-icons">local_parking</i>
            <h2>{{vmText.parktitle}}</h2>
            <p>{{vmText.parkinfo}}</p>
          </div>
        </v-flex>
        <v-flex d-flex xs12 sm4 md4>
          <div>
            <i class="material-icons">pets</i>
            <h2>{{vmText.petstitle}}</h2>
            <p>{{vmText.petsinfo}}</p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import filterDataByLocale from './filterDataByLocale'

export default {
  id: '#Services',
  name: 'Services',
  data () {
    return {
      //object to be extended by only one locale
      vmText: {},
      //object with all locales
      text: {
        captitle: {
            hr: 'Kapacitet',
            en: 'Capacity',
            de: 'Kapazität'
        },
        capinfo: {
            hr: 'Ovo je apartman prilagođen za parove, ali i djeca su dobrodošla. Spavaća soba ima bračni krevet i dva kauča na razvlačenje u dnevnom boravku. Djeca do 6 godina starosti borave besplatno pri korištenju postojećih kreveta. Na zahtjev možete dobiti pomoćni ležaj.',
            en: 'This is a couple friendly apartment, yet children are welcome. The bedroom has a queen bed and two sofa beds in the living room. Up to two children under 6 years stay free of charge when using existing beds. You can get an extra bed on request.',
            de: 'Dies ist ein paar freundliche Wohnung, aber Kinder sind willkommen. Das Schlafzimmer hat ein Doppelbett und zwei Schlafsofas im Wohnzimmer. Bis zu zwei Kinder unter 6 Jahren zahlen keinen Aufpreis in einem der vorhandenen Betten. Sie können ein Extrabett auf Anfrage bekommen.'
        },
        roomtitle: {
            hr: 'Sobe',
            en: 'Rooms',
            de: 'Zimmer'
        },
        roominfo: {
            hr: 'Apartman se sastoji od velikog dnevnog boravka kombinovano s dnevnim boravkom i blagovaonom, lijepom kuhinjom, kupaonicom i spavaćom sobom. Ima terasu s prekrasnim pogledom na more. Cijeli apartman je potpuno opremljen. Mjesto u kojem se osjećate kao doma.',
            en: 'The place consists of a big living room with a sitting and a dining area, a lovely kitchen, a bathroom and a bedroom. Theres also a terrace with a beautiful ocean view. The whole appartment is fully equipped. A place like this feels like home.',
            de: 'Der Ort besteht aus einem großen Wohnzimmer mit einem Sitz- und Essbereich, einer schönen Küche, einem Badezimmer und einem Schlafzimmer. Theres auch eine Terrasse mit einem schönen Meerblick. Die ganze Wohnung ist komplett ausgestattet. Ein Ort wie dieser fühlt sich wie zu Hause an.'
        },
        wifititle: {
            hr: 'Sadržaji',
            en: 'Amenities',
            de: 'Ausstattung'
        },
        wifiinfo: {
            hr: 'Wifi je dostupan i besplatan. Apartman ima sve pogodnosti koje su vam potrebne u kući kao što su klima uređaj, ormar, sušilo za kosu, ručnici, glačalo, perilice, posuđe, pećnicu, hladnjak, mikrovalnu pećnicu i još mnogo toga.',
            en: 'Wifi is available and free of charge. The apartment has all amenities you would need in a house such as air conditioning, wardrobe, hairdryer, towels, iron, washing machines, kitchenware, oven, refrigerator, microwave and much more.',
            de: 'Wifi ist verfügbar und kostenlos. Die Wohnung verfügt über alle Annehmlichkeiten, die Sie in einem Haus benötigen, wie Klimaanlage, Kleiderschrank, Fön, Handtücher, Bügeleisen, Waschmaschine, Geschirr, Backofen, Kühlschrank, Mikrowelle und vieles mehr.'
        },
        accesstitle: {
            hr: 'Pristupačnost',
            en: 'Accessibility',
            de: 'Zugänglichkeit'
        },
        accessinfo: {
            hr: 'Cijeli stan je dostupan s invalidskim kolicima i nalazi se u prizemlju. Želimo pružiti najbolje za sve naše goste.',
            en: 'The entire unit wheelchair accessible and is located on ground floor. We want to provide the best for all of our guests.',
            de: 'Die gesamte Einheit ist rollstuhlgerecht und befindet sich im Erdgeschoss. Wir möchten allen unseren Gästen das Beste bieten.'
        },
        parktitle: {
            hr: 'Parkiralište',
            en: 'Parking',
            de: 'Parken'
        },
        parkinfo: {
            hr: 'Besplatno privatno parkiralište dostupno je u okviru objekta (rezervacija nije potrebna). Cijela jedinica je prilagođena invalidskim kolicima i nalazi se u prizemlju.',
            en: 'Free private parking is available on site (reservation is not needed). The entire unit is wheelchair accessible and is located on ground floor.',
            de: 'Kostenfreie Parkplätze stehen vor Ort zur Verfügung (Reservierung ist nicht erforderlich). Die gesamte Unterkunft ist rollstuhlgerecht und befindet sich im Erdgeschoss.'
        },
        petstitle: {
            hr: 'Kućni ljubimci',
            en: 'Pets',
            de: 'Haustiere'
        },
        petsinfo: {
            hr: 'Zbog neočekivanog ponašanja nekih kućnih ljubimaca koji mogu ostaviti stan oštećen, prinuđeni smo da više ne prihvaćamo kućne ljubimce.',
            en: 'Doe to unexpected behavior of some pets that can leave the apartment damaged, unfortunately we do not accept pets anymore.',
            de: 'Doe zu unerwartetes Verhalten von einigen Haustieren, die die Wohnung beschädigt verlassen können, leider akzeptieren wir keine Haustiere mehr.'
        },

      }
    }
  },
  created() {
      this.vmText = filterDataByLocale(this.text, this.$route.params.localeId)
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container.grid-list-md .layout .flex {
    padding: 20px;
}
h2{
  margin: 10px 0;
}
#Services{
    background-color:#333;
    color:#fff;/*#22d9de;*/
    padding: 50px 0;
}
.flex{
    align-items:center;
}
.flex .material-icons{
    font-size:36px;
    background-color: #3ab09c;
    border: 10px solid #3ab09c;
    border-radius: 50%;
}

</style>
