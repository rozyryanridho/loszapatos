import Layout from '../layouts/layout'
import Hero from '../components/hero.js'
import HeroTwo from '../components/hero-two.js'
import Brand from '../components/brand.js'
import Trending from '../components/trending.js'
import Paragraph from '../components/Paragraph.js'
import HeroSignIn from '../components/hero-signin.js'
import Level from '../components/level.js'


function Beranda(){
 return (
 	<Layout>
 	<Hero/>
 	<HeroTwo/>
	 <Brand/>
	 <Trending/>
	<Paragraph/>
	<HeroSignIn/>
	<Level/>
 	</Layout>
 );
}
export default Beranda;
