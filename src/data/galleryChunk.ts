/**
 * Mapování cest obrázků (bez diakritiky) na URL.
 * Načte se až při prvním zobrazení obrázku události.
 */
import imgVznikPisma from '../assets/gallery/pravek/vznik-pisma.jpg'
import imgOlympijske from '../assets/gallery/starovek/prvni-olypijske-hry.jpg'
import imgAtentat from '../assets/gallery/starovek/atentat-na-julia-cezara.jpeg'
import imgPadZapado from '../assets/gallery/stredovek/pad zapado rimskej rise.webp'
import imgHastings from '../assets/gallery/stredovek/bitva u hastigsu.jpg'
import imgKolumbus from '../assets/gallery/novovek/kolumbus objavuje ameriku.jpg'
import imgRevoluce from '../assets/gallery/modernidoba/Francouzska revoluce.jpg'
import imgMesic from '../assets/gallery/modernidoba/prvni pristani na mesice.webp'
import imgJeskynne from '../assets/gallery/pravek/jeskynnemalby.jpg'
import imgSaman from '../assets/gallery/pravek/samanismus.jpg'
import imgPes from '../assets/gallery/pravek/domestikacepsa.jpg'
import imgZemedelstvi from '../assets/gallery/pravek/zemedelstvi.jpg'
import imgStonehenge from '../assets/gallery/pravek/stonehenge.png'
import imgOsady from '../assets/gallery/pravek/prvni-osidlene-osady.jpg'
import imgKeramika from '../assets/gallery/pravek/keramika.jpg'
import imgKun from '../assets/gallery/pravek/domestikace-kone.jpeg'
import imgKolo from '../assets/gallery/pravek/kolo.jpeg'
import imgPyramidy from '../assets/gallery/pravek/egyptske-pyramidy.jpeg'
import imgSjednoceniEg from '../assets/gallery/pravek/sjednoceni-egypta.jpeg'
import imgHieroglyfy from '../assets/gallery/pravek/hieroglyfy.jpeg'
import imgHarappa from '../assets/gallery/pravek/harappska-civilizace.jpeg'
import imgChammurapi from '../assets/gallery/pravek/chamurapiho-zakonik.jpeg'
import imgTrojan from '../assets/gallery/pravek/trojan-war.webp'
import imgRim from '../assets/gallery/starovek/zalozeni rima.jpg'
import imgNinive from '../assets/gallery/starovek/pad ninvie.jpg'
import imgBuddha from '../assets/gallery/starovek/narozeni-buddhy.jpeg'
import imgKonfucius from '../assets/gallery/starovek/narozeni konfucia.jpg'
import imgMarathon from '../assets/gallery/starovek/bitva-u-marathonu.jpg'
import imgThermopyl from '../assets/gallery/starovek/bitva-Thermopyl.jpg'
import imgPeloponeska from '../assets/gallery/starovek/zacatek-peloponeske-valky.jpg'
import imgAlexander from '../assets/gallery/starovek/alexander-se-stal-kralem.png'
import imgSmrtAlex from '../assets/gallery/starovek/smrt-Alexanda-Velkeho.jpg'
import imgPunske from '../assets/gallery/starovek/zacatek-punskych-valek.jpg'
import imgKartago from '../assets/gallery/starovek/zniceni-kartaga.jpg'
import imgHedvabna from '../assets/gallery/starovek/vznik-hedvabne-stezky.png'
import imgCina from '../assets/gallery/starovek/sjednoceni-ciny-pred-dynastii.jpg'
import imgRimskeCisarstvi from '../assets/gallery/starovek/zalozeni-rimskeho-cisarstvi.webp'
import imgEdikt from '../assets/gallery/starovek/edikt-milansky.jpg'
import imgAksum from '../assets/gallery/starovek/zalozeni-aksumske-rise.jpg'
import imgHidzara from '../assets/gallery/stredovek/hidzara zacatek islamskeho kalendare.jpg'
import imgKarel from '../assets/gallery/stredovek/korunovace karla velkeho.jpg'
import imgKrizova from '../assets/gallery/stredovek/prvni krizova viprava.jpg'
import imgMagna from '../assets/gallery/stredovek/magna charta liberatum.jpg'
import imgCernaSmrt from '../assets/gallery/stredovek/zacatek cerne smrti.png'
import imgKonstantinopol from '../assets/gallery/stredovek/pad konstantinopole.jpg'
import imgGutenberg from '../assets/gallery/stredovek/gutrnbargova tiskarska revoluce.jpg'
import imgGhana from '../assets/gallery/stredovek/pad ghanske rise.webp'
import imgMansa from '../assets/gallery/stredovek/pout mansa musy do mekky.jpg'
import imgIncka from '../assets/gallery/stredovek/vznik incke rise.png'
import imgLuther from '../assets/gallery/novovek/lutherovy 95 tezi.webp'
import img30Valka from '../assets/gallery/novovek/zacatek 30. valky.webp'
import imgNewton from '../assets/gallery/novovek/newtonovy pricip.webp'
import imgAmerDekl from '../assets/gallery/novovek/americka delegrace nezavislosti.webp'
import imgDobitiIncka from '../assets/gallery/novovek/dobiti incke rise.webp'
import imgNapoleon from '../assets/gallery/modernidoba/napoelon se stava cezarom.jpg'
import imgWaterloo from '../assets/gallery/modernidoba/bitva u waterloo.png'
import img1SV from '../assets/gallery/modernidoba/konec americke obcanske valky.jpg'
import img1SVZac from '../assets/gallery/modernidoba/zacatek 1 svetove valky.jpg'
import imgRuska from '../assets/gallery/modernidoba/ruska revoluce.jpg'
import img2SV from '../assets/gallery/modernidoba/konec druhe svetove valky.jpg'
import imgBerlin from '../assets/gallery/modernidoba/pad berlinske zdi.jpeg'
import img911 from '../assets/gallery/modernidoba/utoky na svetove obchodni centrum.jpg'
import imgBerlKonf from '../assets/gallery/modernidoba/Berlinska-konference.jpg'
import imgApartheid from '../assets/gallery/modernidoba/konec zpartheidu v jizni americe.jpg'
import imgBrazile from '../assets/gallery/modernidoba/nezavislost brazilie.jpg'
import imgPanama from '../assets/gallery/modernidoba/otevreni panamskeho prulivu.webp'
import imgAndska from '../assets/gallery/pravek/zacatek-andske-civilizace.jpeg'
import imgChavin from '../assets/gallery/pravek/chavinska-kutua.jpeg'
import imgKartagoPravek from '../assets/gallery/pravek/kartago.jpeg'

const imageMap: Record<string, string> = {
  'pravek/vznik-pisma.jpg': imgVznikPisma,
  'starovek/prvni-olypijske-hry.jpg': imgOlympijske,
  'starovek/atentat-na-julia-cezara.jpeg': imgAtentat,
  'stredovek/pad zapado rimskej rise.webp': imgPadZapado,
  'stredovek/bitva u hastigsu.jpg': imgHastings,
  'novovek/kolumbus objavuje ameriku.jpg': imgKolumbus,
  'modernidoba/Francouzska revoluce.jpg': imgRevoluce,
  'modernidoba/prvni pristani na mesice.webp': imgMesic,
  'pravek/jeskynnemalby.jpg': imgJeskynne,
  'pravek/samanismus.jpg': imgSaman,
  'pravek/domestikacepsa.jpg': imgPes,
  'pravek/zmedelstvi.jpg': imgZemedelstvi,
  'pravek/zemedelstvi.jpg': imgZemedelstvi,
  'pravek/stonehenge.png': imgStonehenge,
  'pravek/prvni-osidlene-osady.jpg': imgOsady,
  'pravek/keramika.jpg': imgKeramika,
  'pravek/domestikace-kone.jpeg': imgKun,
  'pravek/kolo.jpeg': imgKolo,
  'pravek/egyptske-pyramidy.jpeg': imgPyramidy,
  'pravek/sjednoceni-egypta.jpeg': imgSjednoceniEg,
  'pravek/hieroglyfy.jpeg': imgHieroglyfy,
  'pravek/harappska-civilizace.jpeg': imgHarappa,
  'pravek/chamurapiho-zakonik.jpeg': imgChammurapi,
  'pravek/trojan-war.webp': imgTrojan,
  'pravek/zacatek-andske-civilizace.jpeg': imgAndska,
  'pravek/chavinska-kutua.jpeg': imgChavin,
  'pravek/kartago.jpeg': imgKartagoPravek,
  'starovek/zalozeni rima.jpg': imgRim,
  'starovek/pad ninvie.jpg': imgNinive,
  'starovek/narozeni-buddhy.jpeg': imgBuddha,
  'starovek/narozeni konfucia.jpg': imgKonfucius,
  'starovek/bitva-u-marathonu.jpg': imgMarathon,
  'starovek/bitva-Thermopyl.jpg': imgThermopyl,
  'starovek/zacatek-peloponeske-valky.jpg': imgPeloponeska,
  'starovek/alexander-se-stal-kralem.png': imgAlexander,
  'starovek/smrt-Alexanda-Velkeho.jpg': imgSmrtAlex,
  'starovek/zacatek-punskych-valek.jpg': imgPunske,
  'starovek/zniceni-kartaga.jpg': imgKartago,
  'starovek/vznik-hedvabne-stezky.png': imgHedvabna,
  'starovek/sjednoceni-ciny-pred-dynastii.jpg': imgCina,
  'starovek/zalozni-rimskeho-cisarstvi.webp': imgRimskeCisarstvi,
  'starovek/zalozeni-rimskeho-cisarstvi.webp': imgRimskeCisarstvi,
  'starovek/edikt-milansky.jpg': imgEdikt,
  'starovek/zalozeni-aksumske-rise.jpg': imgAksum,
  'stredovek/hidzara zacatek islamskeho kalendare.jpg': imgHidzara,
  'stredovek/korunovace karla velkeho.jpg': imgKarel,
  'stredovek/prvni krizova viprava.jpg': imgKrizova,
  'stredovek/magna charta liberatum.jpg': imgMagna,
  'stredovek/zacatek cerne smrti.png': imgCernaSmrt,
  'stredovek/pad konstantinopole.jpg': imgKonstantinopol,
  'stredovek/gutrnbargova tiskarska revoluce.jpg': imgGutenberg,
  'stredovek/pad ghanske rise.webp': imgGhana,
  'stredovek/pout mansa musy do mekky.jpg': imgMansa,
  'stredovek/vznik incke rise.png': imgIncka,
  'novovek/lutherovy 95 tezi.webp': imgLuther,
  'novovek/zacatek 30. valky.webp': img30Valka,
  'novovek/newtonovy pricip.webp': imgNewton,
  'novovek/americka delegrace nezavislosti.webp': imgAmerDekl,
  'novovek/dobiti incke rise.webp': imgDobitiIncka,
  'modernidoba/napoelon se stava cezarom.jpg': imgNapoleon,
  'modernidoba/bitva u waterloo.png': imgWaterloo,
  'modernidoba/konec americke obcanske valky.jpg': img1SV,
  'modernidoba/zacatek 1 svetove valky.jpg': img1SVZac,
  'modernidoba/ruska revoluce.jpg': imgRuska,
  'modernidoba/konec druhe svetove valky.jpg': img2SV,
  'modernidoba/pad berlinske zdi.jpeg': imgBerlin,
  'modernidoba/utoky na svetove obchodni centrum.jpg': img911,
  'modernidoba/Berlinska-konference.jpg': imgBerlKonf,
  'modernidoba/konec zpartheidu v jizni americe.jpg': imgApartheid,
  'modernidoba/nezavislost brazilie.jpg': imgBrazile,
  'modernidoba/otevreni panamskeho prulivu.webp': imgPanama,
}

export function getImage(path: string): string {
  return imageMap[path] ?? ''
}
