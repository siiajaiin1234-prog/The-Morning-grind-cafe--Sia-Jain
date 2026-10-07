import { Article } from '../types/cafe';

import baristaPourOverImg from '../assets/images/barista_pour_over_brew_1791399918754.jpg';
import pastriesLatteImg from '../assets/images/artisanal_pastries_latte_1791399933160.jpg';
import roastingBeansImg from '../assets/images/roasting_coffee_beans_1791399946536.jpg';
import icedEspressoImg from '../assets/images/iced_espresso_tonic_1791399962872.jpg';
import latteArtImg from '../assets/images/latte_art_closeup_1791399972712.jpg';
import aeropressImg from '../assets/images/aeropress_brewing_1791399991021.jpg';
import farmHarvestImg from '../assets/images/coffee_farm_harvest_1791400004176.jpg';
import chemexRitualImg from '../assets/images/chemex_morning_ritual_1791400017735.jpg';
import matchaCraftImg from '../assets/images/matcha_and_tea_craft_1791400030893.jpg';
import cafeInteriorImg from '../assets/images/cafe_hero_interior_1791399904397.jpg';

export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    slug: 'geometry-of-the-pour-over',
    title: 'The Geometry of the Pour-Over: Extraction Dynamics in V60 vs Flat-Bottom Brewers',
    subtitle: 'Why bed shape, flow rate, and water bypass fundamentally dictate the brightness and sweetness of your morning cup.',
    category: 'Brewing Guides',
    readTime: '7 min read',
    publishedDate: 'October 4, 2026',
    author: {
      name: 'Julian Vance',
      role: 'Head of Coffee & Quality',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    },
    coverImage: baristaPourOverImg,
    imageCaption: 'Continuous gentle spiral pour at 93°C on the copper bar at The Copper Mill.',
    featured: true,
    excerpt: 'Explore the fluid dynamics behind cone and flat-bottom drippers. We break down contact time, turbulence, grind distribution, and how to calibrate your pour for sparkling acidity or rounded body.',
    tags: ['Brewing', 'V60', 'Extraction Science', 'Filter Coffee'],
    sections: [
      {
        heading: 'The Conflict of Conical vs Flat Beds',
        body: [
          'Every morning on our slow bar, guests often ask why we choose a conical ceramic V60 for our washed Ethiopian lots, while opting for a flat-bottom Kalita or Orea for naturally processed Geishas and heavier Central American pacamaras.',
          'The answer lies not in aesthetic preference, but in fluid mechanics. In a 60-degree conical dripper, water travels through a progressively deepening bed of coffee grounds. The particles at the center apex experience prolonged contact time and greater hydraulic pressure than grounds along the sloping perimeter walls.',
          'By contrast, a flat-bottom bed distributes water across a uniform column depth. Each coffee grind is exposed to virtually identical contact durations, minimizing localized over-extraction channels and yielding a remarkably uniform TDS (Total Dissolved Solids) percentage.',
        ],
        quote: 'A brew recipe is merely a conversation between fluid friction and cellular solubility.',
      },
      {
        heading: 'Channeling, Bypass, and the Role of Ribbing',
        body: [
          'The interior spiral ridges of the Hario V60 were engineered not as decoration, but to prevent the wet paper filter from clinging to the ceramic wall. This micro-gap allows air to escape freely during the bloom phase, encouraging an unimpeded downward draw-down.',
          'However, this same airflow creates a phenomenon known as perimeter bypass: clean water bypassing the dense coffee bed by slipping along the filter paper boundaries. When you pour aggressively toward the paper walls, you dilute the slurry with unextracted water, artificially lowering body while spiking harsh astringency.',
          'To counteract this, our baristas practice pulse pouring in concentric circles that never exceed the diameter of a two-euro coin. By directing the kinetic force exclusively through the center bed, we maintain steady bed saturation without disturbing the protective fines ring.',
        ],
        specs: [
          { label: 'Dose Ratio', value: '18.0g coffee to 300g filtered water (1:16.6)' },
          { label: 'Water Temp', value: '93.5°C (199°F) mineralized at 110 ppm' },
          { label: 'Total Drawdown', value: '2 minutes 45 seconds to 3 minutes' },
          { label: 'Target TDS', value: '1.38% - 1.42% (Sweet balance)' },
        ],
      },
      {
        heading: 'Translating Theory to Your Home Counter',
        body: [
          'If you enjoy vibrant floral notes, clean bergamot brightness, and delicate jasmine aromatics, lean into the V60 with a medium-fine burr setting and a 45-second bloom at triple coffee weight.',
          'If you prefer dense peach sweetness, milk-chocolate roundness, and forgiving extractions, switch to a flat-bed dripper. You will immediately notice a softer mouthfeel and a lingering caramel finish that holds its structure as the cup gently cools.',
        ],
      },
    ],
  },
  {
    id: 'art-02',
    slug: 'terroir-in-the-cup-huila-colombia',
    title: 'Terroir in the Cup: A Journey into Huila’s High-Altitude Colombian Micro-Lots',
    subtitle: 'From volcanic soils at 1,950 meters to thermal shock fermentation: how farm-level craftsmanship transforms green coffee.',
    category: 'Origins & Farms',
    readTime: '9 min read',
    publishedDate: 'September 28, 2026',
    author: {
      name: 'Elena Morales',
      role: 'Green Sourcing Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
    },
    coverImage: farmHarvestImg,
    imageCaption: 'Hand-harvesting ripe Caturra and Pink Bourbon cherries in Pitalito, Huila.',
    excerpt: 'Last harvest, our green buying team returned to southern Huila to walk the steep volcanic hillsides of Pitalito and San Agustín. Here is what makes this terroir singular in global specialty coffee.',
    tags: ['Colombia', 'Direct Trade', 'Micro-Lots', 'Fermentation'],
    sections: [
      {
        heading: 'The Geography of Pitalito and San Agustín',
        body: [
          'Tucked into the cradle between Colombia’s Central and Eastern Cordilleras, the department of Huila is blessed with a microclimate that defies simple agricultural models. Warm valley breezes ascend into cool mountain air every afternoon, causing rapid drops in nocturnal temperature.',
          'This intense thermal variation forces the coffee tree into an evolutionary defense mechanism: it slows cherry maturation down to a crawl. Over eight to nine months, complex organic sugars concentrate within the mucilage, building the precursor compounds for phosphoric acidity and stone-fruit sweetness.',
          'Walking the steep 45-degree slopes of Finca La Esperanza, our boots sink into deep, spongy volcanic ash rich in potassium and organic matter. There is no heavy machinery here; every single cherry is hand-harvested at peak brix reading.',
        ],
        quote: 'High altitude does not simply make coffee harder to grow; it forces the fruit to become sweet in self-defense.',
      },
      {
        heading: 'The Rise of Pink Bourbon and Anaerobic Processing',
        body: [
          'For decades, standard washed Caturra and Castillo dominated Colombian farms. But over the past five years, the resurgence of Pink Bourbon—a rare natural hybrid of Red and Yellow Bourbon—has transformed Huila into the epicentre of flavor innovation.',
          'Producer Diego Benitez has pioneered an anaerobic thermal-shock protocol that preserves delicate floral notes while enhancing mouthfeel. After flotation sorting, whole ripe cherries rest in sealed oxygen-free tanks for 48 hours. They are then depulped and submerged in a warm water bath (40°C) before an immediate cold shock rinse (12°C).',
          'This rapid thermal transition crystallizes volatile esters inside the parchment layer. The resulting cup displays an extraordinary symphony of pink guava, candied grapefruit, and white blossom honey.',
        ],
        specs: [
          { label: 'Farm Location', value: 'Pitalito, Huila, Colombia' },
          { label: 'Elevation', value: '1,920 – 1,980 masl' },
          { label: 'Varietal', value: '100% Pink Bourbon' },
          { label: 'Cup Profile', value: 'Pink Guava, White Peach, Jasmine, Meyer Lemon' },
        ],
      },
      {
        heading: 'Direct Trade as a Living Relationship',
        body: [
          'Specialty coffee pricing cannot rely on standard commodity exchange indexes. We pay Finca La Esperanza 280% over the Fair Trade baseline directly into their farm development fund.',
          'This premium has financed raised drying beds with solar ventilation and modernized living quarters for seasonal pickers. When you purchase this lot at our counter, you are directly reinforcing an agricultural loop that honors human dignity.',
        ],
      },
    ],
  },
  {
    id: 'art-03',
    slug: 'the-morning-lamination-sourdough-croissants',
    title: 'The Morning Lamination: The 72-Hour Sourdough Croissant Craft',
    subtitle: 'Inside our pastry kitchen before sunrise: wild yeast levain, French butter sheets, and 27 delicate folds.',
    category: 'Bakery & Pairings',
    readTime: '6 min read',
    publishedDate: 'September 22, 2026',
    author: {
      name: 'Matteo Rossi',
      role: 'Master Baker & Viennoiserie Chef',
      avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=120&h=120&q=80',
    },
    coverImage: pastriesLatteImg,
    imageCaption: 'Golden honeycomb crumb structure on fresh morning sourdough croissants.',
    excerpt: 'True viennoiserie is an obsessive union of thermodynamics and microbiology. Discover how our 72-hour cold-fermented sourdough croissants achieve their signature shatter-crisp exterior and tender, custardy honeycomb crumb.',
    tags: ['Viennoiserie', 'Sourdough', 'Pastry', 'Bakery'],
    sections: [
      {
        heading: 'Why Time Is Our Only True Preservative',
        body: [
          'At 3:30 AM, while the neighborhood streets outside are completely quiet, the bakery beneath The Copper Mill is already warm and alive with the smell of sweet cultured butter and gentle sourdough fermentation.',
          'Most commercial croissants rely on fast-acting commercial compressed yeast and chemical dough conditioners to churn out pastries in under three hours. Our croissants take a full three days.',
          'We begin with an active 100% hydration levain, refreshed three times daily with stoneground heritage T65 flour. This slow microbial activity generates lactic and acetic acids that not only impart complex aromatic depth, but break down gluten proteins, making the finished pastry remarkably gentle on digestion.',
        ],
        quote: 'You cannot rush lamination without paying for it in texture. Cold butter must slide, never melt.',
      },
      {
        heading: 'The Physics of the Butter Sheet (Beurrage)',
        body: [
          'Lamination is the physical layering of alternating sheets of dough (détrempe) and unsalted cultured butter (beurrage). We specify high-fat butter (84% butterfat minimum) imported from Normandy, churned from slow-cultured sweet cream.',
          'The butter must be kept at precisely 14°C: pliable enough to stretch under rolling pins without fracturing, yet cool enough not to melt into the dough matrix.',
          'Through a series of double and single folds, we produce exactly 27 individual layers of butter encapsulated between 28 micro-layers of dough. When baked in a high-convection hearth oven, the moisture in the butter vaporizes into steam, puffing the dough layers apart into the iconic honeycomb cell architecture.',
        ],
        specs: [
          { label: 'Fermentation Time', value: '72 Hours Cold Retardation' },
          { label: 'Butterfat Content', value: '84% French Cultured Butter' },
          { label: 'Total Dough Layers', value: '27 lamination sheets' },
          { label: 'Bake Profile', value: '19 minutes at 205°C hearth decline' },
        ],
      },
      {
        heading: 'The Sacred Morning Pairing',
        body: [
          'A hot, fresh butter croissant paired with a double cortado using our seasonal House Blend is a pairing where butterfat harmonizes with the milk-chocolate roast notes, cutting the bright citrus acidity into sweet mandarin marmalade.',
          'We bake only two small batches each day—one at 7:00 AM and one at 10:30 AM—to ensure no guest ever receives a pastry that has lost its morning shatter.',
        ],
      },
    ],
  },
  {
    id: 'art-04',
    slug: 'the-roasters-curve-maillard-phase',
    title: 'The Roaster’s Curve: Navigating the Maillard Phase and First Crack',
    subtitle: 'Behind the steel drum: how rate-of-rise, convective airflow, and development time ratio unlock fruit notes.',
    category: 'Roastery Notes',
    readTime: '8 min read',
    publishedDate: 'September 15, 2026',
    author: {
      name: 'Julian Vance',
      role: 'Head of Coffee & Quality',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    },
    coverImage: roastingBeansImg,
    imageCaption: 'The stainless cooling tray spinning fresh light-roast Ethiopian Yirgacheffe.',
    excerpt: 'Roasting coffee is neither art nor pure data alone—it is the disciplined control of exothermic thermodynamic transitions. Here is how we calibrate our gas burner to preserve origin clarity.',
    tags: ['Roasting', 'Rate of Rise', 'Coffee Science', 'Specialty Roastery'],
    sections: [
      {
        heading: 'The Green Bean as an Organic Pressure Vessel',
        body: [
          'Before green coffee enters our 15kg cast-iron drum roaster, each seed is an intensely hard cellular fortress holding 10% to 12% trapped moisture, amino acids, sucrose, and chlorogenic acids.',
          'Once charged into the pre-heated drum at 195°C, the temperature curve plummets toward the "Turning Point"—the thermodynamic equilibrium where bean temperature and drum air equalize. From this moment onward, the roaster must guide the bean through drying, browning, and development with absolute intentionality.',
          'If you charge too cold, the coffee bakes into flat bready grain. If you charge too hot, the delicate bean tips scorch, introducing acrid astringency before internal sugars can caramelize.',
        ],
        quote: 'A great roaster does not add flavor to coffee; they simply refuse to destroy what the soil provided.',
      },
      {
        heading: 'Decoding the Maillard Reaction and Caramelization',
        body: [
          'Around 150°C, the bean shifts from pale yellow to cinnamon brown: the Maillard reaction has commenced. Amino acids cross-react with reducing sugars to generate hundreds of new volatile aroma compounds, including nutty pyrazines and caramel furans.',
          'We monitor Rate of Rise (RoR)—the speed at which the bean temperature climbs per minute—via digital thermocouple probes. Our primary objective is a constantly declining RoR curve without plateaus (which cause baking) or sudden spikes (which introduce bitter roastiness).',
          'At roughly 196°C, internal steam pressure overcomes the cellular matrix with an audible pop: First Crack. This is the moment of truth where roast development time ratio (DTR) dictates the cup balance. For our single origins, we aim for a modest 11% to 13% DTR to safeguard floral esters and malic acidity.',
        ],
        specs: [
          { label: 'Roaster Drum', value: '15kg Double-Walled Cast Iron' },
          { label: 'Charge Temp', value: '198°C at 70% drum speed' },
          { label: 'Turning Point', value: '1:12 min at 92°C' },
          { label: 'Development Ratio', value: '11.8% for filter profiles' },
        ],
      },
      {
        heading: 'The Cupping Table: Quality Assurance',
        body: [
          'Every roast batch rests in degas bins for precisely 24 hours before arriving at our morning QA cupping table. Baristas, roasters, and guests participate in blind triangular cuppings.',
          'Any batch displaying green grassy astringency or roasty carbon taint is immediately removed from retail circulation and repurposed for cold macerations or culinary infusions.',
        ],
      },
    ],
  },
  {
    id: 'art-05',
    slug: 'summer-chill-chemistry-espresso-tonic',
    title: 'Summer Chill: The Chemistry and Alchemy of the Sparkling Espresso Tonic',
    subtitle: 'Quinine bitterness, carbonic acid, and cold citrus: why this Nordic cocktail conquered sunny afternoons.',
    category: 'Seasonal & Cold',
    readTime: '5 min read',
    publishedDate: 'September 08, 2026',
    author: {
      name: 'Maya Lin',
      role: 'Lead Mixologist & Barista',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    },
    coverImage: icedEspressoImg,
    imageCaption: 'The Copper Mill Espresso Tonic layered with blood orange and garden rosemary.',
    excerpt: 'Few drinks provoke as much initial skepticism and subsequent obsession as the espresso tonic. Discover the culinary balance between cinchona bark quinine and washed African espresso.',
    tags: ['Cold Brew', 'Espresso Tonic', 'Cocktails', 'Summer Menu'],
    sections: [
      {
        heading: 'Origins of an Unlikely Marriage',
        body: [
          'Legend attributes the espresso tonic to a sleepy afternoon at Koppi Roasters in Helsingborg, Sweden in the mid-2000s, where staff mixed leftover party tonic with a shot of rich seasonal espresso.',
          'At first glance, pairing the bitter astringency of quinine tonic water with the bitter notes of dark coffee seems counterintuitive. In culinary science, stacking identical bitter compounds usually amplifies unpleasant harshness.',
          'However, when executed with modern specialty coffee—lightly roasted single-origin espresso packed with citric and malic acids—the pairing becomes revelatory. The effervescent carbonation opens up aromatic top notes like a fine sparkling wine.',
        ],
        quote: 'Carbonic acid transforms heavy coffee lipids into a buoyant, thirst-quenching botanical nectar.',
      },
      {
        heading: 'Layering and Temperature Dynamics',
        body: [
          'Serving an exceptional espresso tonic requires technical precision. If you pour hot espresso directly onto room-temperature tonic water, the sudden thermal shock causes an immediate CO2 breakout, generating an unmanageable foam explosion and leaving the drink flat.',
          'We chill a 12-ounce crystal highball glass to -2°C, load it with crystal-clear ice spears, and pour 160ml of artisanal small-batch elderflower tonic. We then pull a double ristretto of our Washed Kenya Kirinyaga over a frozen stainless steel sphere to bring the liquid to 18°C before gently floating it over a spoon.',
          'The result is a striking two-tier ombre presentation: deep amber coffee resting atop translucent tonic.',
        ],
        specs: [
          { label: 'Tonic Water', value: '160ml Artisanal Elderflower Botanical Tonic' },
          { label: 'Espresso Base', value: '36g Double Ristretto (Washed Kenya)' },
          { label: 'Garnish', value: 'Dehydrated Blood Orange + Slapped Rosemary' },
          { label: 'Serving Temp', value: '2°C chilled glassware' },
        ],
      },
      {
        heading: 'How to Enjoy at the Table',
        body: [
          'Do not stir immediately! Take your first sip straight from the rim to taste the velvety, warm espresso crema. On your second sip, the effervescent citrus tonic cuts underneath, refreshing the palate with notes of blackcurrant and wild thyme.',
        ],
      },
    ],
  },
  {
    id: 'art-06',
    slug: 'microfoam-mastery-surface-tension-latte-art',
    title: 'Microfoam Mastery: Surface Tension, Temperature, and the Art of the Rosetta',
    subtitle: 'From protein denaturation at 60°C to hydrodynamic laminar flow: the science of silky steamed milk.',
    category: 'Brewing Guides',
    readTime: '6 min read',
    publishedDate: 'August 31, 2026',
    author: {
      name: 'Maya Lin',
      role: 'Lead Mixologist & Barista',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    },
    coverImage: latteArtImg,
    imageCaption: 'A delicate swan rosetta poured into our signature terracotta flat white cup.',
    excerpt: 'Pouring competition-level latte art is not a genetic talent—it is an exercise in acoustic feedback, fluid aeration, and surface tension management. Learn how to steam silky microfoam.',
    tags: ['Latte Art', 'Microfoam', 'Barista Skills', 'Milk Science'],
    sections: [
      {
        heading: 'The Chemistry of Steaming Milk',
        body: [
          'The dense white foam produced by cheap automated machines is filled with large, dry air bubbles that collapse within seconds. True specialty microfoam, by contrast, possesses the liquid sheen of wet gloss paint.',
          'When steam enters cold whole milk at 1.5 bars of pressure, two key proteins go to work: caseins and whey (specifically beta-lactoglobulin). As the temperature rises through 40°C to 50°C, these proteins unfold (denature) and wrap around incoming micro-bubbles, trapping them in an elastic emulsion.',
          'Crucially, milk must never exceed 65°C (149°F). Beyond this threshold, milk sugars scorch, proteins seize into rigid structures, and the natural perceived sweetness of lactose turns flat and sulfurous.',
        ],
        quote: 'Listen to the steam wand: it should whisper like tearing tissue paper, never scream like a train whistle.',
      },
      {
        heading: 'The Two-Phase Steaming Sequence',
        body: [
          'Step 1: Stretching (Aeration). Keep the steam tip barely submerged beneath the surface of the milk for the first three seconds. You should hear distinct, rhythmic "chirps." This injects controlled micro-bubbles into the cold liquid.',
          'Step 2: Texturing (The Vortex). As the pitcher warms to body temperature, submerge the tip an additional half-centimeter and tilt the pitcher 15 degrees to establish a violent, silent whirlpool. This vortex homogenizes large bubbles into invisible micro-emulsions.',
          'Once the pitcher base becomes almost too warm to hold comfortably for more than two seconds (around 60°C), shut the steam valve with an authoritative twist and wipe the wand immediately.',
        ],
        specs: [
          { label: 'Target Milk Temp', value: '58°C – 62°C (Sweet spot for lactose)' },
          { label: 'Steam Boiler Pressure', value: '1.45 bars' },
          { label: 'Pitcher Angle', value: '15° tilt creating counter-clockwise vortex' },
          { label: 'Aeration Window', value: 'First 3.5 seconds only' },
        ],
      },
      {
        heading: 'Puddle, Cut, and Draw: Pouring the Canvas',
        body: [
          'Swirl your espresso to integrate the crema, tilt the cup at 45 degrees, and pour from two inches above to penetrate the dark crema canvas without marking it. Once the cup is half full, bring the pitcher spout down to touch the surface.',
          'As the milk rolls over itself, gentle lateral wrist oscillations lay down distinct white ribs. Finish with a clean, high lift and slice through the center to pull the leaves into a majestic rosetta.',
        ],
      },
    ],
  },
  {
    id: 'art-07',
    slug: 'the-inverted-aeropress-decoded',
    title: 'The Inverted Method Decoded: Why the Aeropress Remains the Travel Legend',
    subtitle: 'Full immersion meets pneumatic pressure: how Alan Adler’s toy revolutionized barista championships.',
    category: 'Brewing Guides',
    readTime: '7 min read',
    publishedDate: 'August 24, 2026',
    author: {
      name: 'Julian Vance',
      role: 'Head of Coffee & Quality',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    },
    coverImage: aeropressImg,
    imageCaption: 'The precision travel setup: Aeropress, Comandante hand grinder, and scale.',
    excerpt: 'Invented by a frisbee toy engineer in 2005, the Aeropress is perhaps the most versatile and durable coffee brewer in human history. Here is our award-winning competition recipe.',
    tags: ['Aeropress', 'Immersion', 'Travel Coffee', 'Brew Recipes'],
    sections: [
      {
        heading: 'A Frisbee Designer’s Greatest Invention',
        body: [
          'Alan Adler was tired of weak, bitter drip coffee from conventional home makers. Being a Stanford engineering lecturer and the inventor of the world-record Aerobie flying ring, he applied aerodynamic principles to coffee extraction.',
          'The Aeropress combines the best attributes of French Press immersion (total contact between ground coffee and water) with the clarity of paper filtration and the pneumatic velocity of espresso.',
          'Because the brewer operates at a modest 0.75 bar of pneumatic manual pressure, it produces a clean, sediment-free cup with virtually none of the astringent tannins associated with extended boiling or drip percolation.',
        ],
        quote: 'The Aeropress proves that exceptional coffee requires neither expensive machinery nor fragile glassware.',
      },
      {
        heading: 'Why We Invert: Total Extraction Control',
        body: [
          'In standard Aeropress orientation, water drips through the paper filter before full saturation occurs. In the inverted method, the plunger is set at position 4 and the brewer stands upside down.',
          'This allows complete control over steeping duration without accidental premature bypass. You can agitate the slurry aggressively, inspect the bloom, and guarantee 100% extraction parity across all particles.',
          'We utilize a metal mesh filter layered beneath a pre-rinsed paper filter disk. The metal screen allows luscious aromatic lipids to pass into the cup, while the paper catches microscopic fines for brilliant clarity.',
        ],
        specs: [
          { label: 'Coffee Dose', value: '17.5g medium-coarse burr grind' },
          { label: 'Water Temp', value: '88°C (cooler temp boosts sweetness)' },
          { label: 'Total Steep Time', value: '1 minute 45 seconds inverted' },
          { label: 'Press Duration', value: '30 seconds steady press (stop at hiss)' },
        ],
      },
      {
        heading: 'The World Aeropress Championship Winning Protocol',
        body: [
          'Pour 100g of water vigorously, stir 10 times in a cross pattern, wait 30 seconds, then pour the remaining 120g of water. At 1:30, attach the pre-heated cap, flip decisively onto your ceramic mug, and press with steady forearm weight.',
          'Stop pressing immediately when you hear the initial air hiss. The resulting cup carries the syrupy mouthfeel of a light-roast espresso paired with the crystalline finish of a V60.',
        ],
      },
    ],
  },
  {
    id: 'art-08',
    slug: 'shade-grown-and-bird-friendly-agroforestry',
    title: 'Shade-Grown and Bird-Friendly: Ecological Agroforestry in Specialty Coffee',
    subtitle: 'Beyond monoculture: how multi-canopy trees protect soil biology, migratory birds, and coffee flavor.',
    category: 'Origins & Farms',
    readTime: '8 min read',
    publishedDate: 'August 17, 2026',
    author: {
      name: 'Elena Morales',
      role: 'Green Sourcing Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
    },
    coverImage: cafeInteriorImg,
    imageCaption: 'The Copper Mill’s central atrium, designed with local reclaimed timber and living greenery.',
    excerpt: 'Monoculture sun plantations produce high short-term yields at devastating environmental costs. Discover how our partner farms in Oaxaca and Guatemala restore native cloud forests.',
    tags: ['Sustainability', 'Agroforestry', 'Bird Friendly', 'Direct Trade'],
    sections: [
      {
        heading: 'The Hidden Cost of Sun-Exposed Monoculture',
        body: [
          'During the 1970s "Green Revolution," hundreds of thousands of hectares of tropical cloud forests in Central and South America were clear-cut to make way for high-density sun coffee. While yield jumped temporarily, the ecological toll was catastrophic.',
          'Stripped of forest canopies, topsoils suffered rapid erosion, groundwater dried up, and synthetic nitrogen fertilizers became mandatory to keep depleted trees alive.',
          'Even worse, the habitat of thousands of migratory songbird species was eradicated, destroying natural pest control and creating a vicious cycle of chemical pesticide reliance.',
        ],
        quote: 'A coffee farm should not look like a chemical factory; it should look like a thriving forest that happens to bear fruit.',
      },
      {
        heading: 'The Living Canopy of Finca San Jerónimo',
        body: [
          'On our partner estate in Oaxaca, Mexico, coffee trees grow beneath a three-tiered natural canopy of native Inga, cedar, and avocado trees. Inga trees are natural nitrogen-fixers, pulling atmospheric nitrogen down through root nodules directly into the soil.',
          'The dense canopy buffers the coffee trees against extreme heat spikes and torrential hail. Fallen foliage creates a thick mulch bed, home to rich mycorrhizal fungal networks that nourish the root systems without artificial inputs.',
          'Furthermore, the Smithsonian Migratory Bird Center has verified over 140 resident bird species nesting in these canopies. These birds consume the coffee berry borer beetle (broca), keeping infestations below 1% organically.',
        ],
        specs: [
          { label: 'Canopy Density', value: '45% - 60% shade coverage' },
          { label: 'Soil Organic Matter', value: '6.8% (double industrial average)' },
          { label: 'Bird Species Count', value: '142 documented native & migratory species' },
          { label: 'Certification', value: 'Smithsonian Bird-Friendly & Biodynamic' },
        ],
      },
      {
        heading: 'What This Means for the Brew in Your Hands',
        body: [
          'Ecological health translates directly into cup complexity. Shade-grown coffee cherries mature 25% slower than sun-grown fruit, yielding denser seeds with higher organic sugar concentration.',
          'When you sip our Oaxaca single origin, you can taste that deliberate slowness: notes of dark honey, dried fig, and velvety cocoa nibs with zero chemical bitterness.',
        ],
      },
    ],
  },
  {
    id: 'art-09',
    slug: 'the-sunday-chemex-ritual',
    title: 'The Sunday Chemex Ritual: Brewing for Friends, Light, and Slowness',
    subtitle: 'Heavy bonded paper filters, hourglass borosilicate glass, and the pleasure of communal morning coffee.',
    category: 'Cafe Culture',
    readTime: '6 min read',
    publishedDate: 'August 10, 2026',
    author: {
      name: 'Matteo Rossi',
      role: 'Master Baker & Viennoiserie Chef',
      avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=120&h=120&q=80',
    },
    coverImage: chemexRitualImg,
    imageCaption: 'The iconic hourglass Chemex on our sunlit communal table on a slow Sunday morning.',
    excerpt: 'Designed by chemist Peter Schlumbohm in 1941, the Chemex is an enduring icon of mid-century functionalism and the ultimate vessel for lazy weekend brunches.',
    tags: ['Chemex', 'Rituals', 'Slow Living', 'Sunday Morning'],
    sections: [
      {
        heading: 'An Icon in the Permanent Collection of MoMA',
        body: [
          'Very few kitchen appliances hold a permanent place in the Museum of Modern Art in New York. The Chemex coffeemaker does.',
          'Invented in 1941 by eccentric German chemist Dr. Peter Schlumbohm, the device is fabricated from a single piece of non-porous borosilicate laboratory glass wrapped with a turned wood collar and raw leather tie.',
          'Schlumbohm famously understood that coffee extraction is fundamentally an organic extraction experiment. He stripped away valves, wires, and moving parts, creating an object that feels equally at home in an art gallery as it does on a crowded breakfast table.',
        ],
        quote: 'The Chemex does not ask you to hurry. It demands five quiet minutes of your attention and repays you with liquid amber.',
      },
      {
        heading: 'The Power of the Bonded Filter',
        body: [
          'The true secret of the Chemex is not the glass shape, but the proprietary laboratory-grade paper filter. Chemex filters are 20% to 30% heavier than standard paper filters.',
          'This tight cellulose weave traps virtually all suspended insolubles, bitter oils, and sediment fines. What flows through into the lower vessel is exceptionally bright and tea-like, with crystalline clarity.',
          'Because the thick paper restricts flow rate, you must coarsen your burr grind considerably—aiming for coarse sea-salt texture. If ground too fine, the brew stalls and over-extracts into harsh dryness.',
        ],
        specs: [
          { label: 'Batch Size', value: '45g coffee to 750g water (serves 3 people)' },
          { label: 'Filter Style', value: 'Unbleached bonded square filter' },
          { label: 'Water Temp', value: '94°C (201°F)' },
          { label: 'Total Pour Time', value: '4 minutes 30 seconds' },
        ],
      },
      {
        heading: 'A Social Ritual for Communal Living',
        body: [
          'At our cafe, Sunday mornings are intentionally paced slower than weekdays. We encourage our guests to order a 750ml Chemex for their table to share among friends.',
          'Pouring from that wooden collar into ceramic mugs while warm brioche bread arrives from the kitchen is an antidote to the rushed notifications of modern digital work.',
        ],
      },
    ],
  },
  {
    id: 'art-10',
    slug: 'from-uji-to-the-espresso-bar-matcha-craft',
    title: 'From Uji to the Espresso Bar: Ceremonial Matcha Sourcing and Modern Whisking',
    subtitle: 'Shade-grown tencha leaves, granite stone-milling, and why temperature control makes or breaks green tea.',
    category: 'Cafe Culture',
    readTime: '7 min read',
    publishedDate: 'August 03, 2026',
    author: {
      name: 'Maya Lin',
      role: 'Lead Mixologist & Barista',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    },
    coverImage: matchaCraftImg,
    imageCaption: 'Whisking fresh first-harvest ceremonial matcha in a handcrafted ceramic chawan.',
    excerpt: 'Many Western cafes treat matcha as green dust to drown in sweet vanilla syrup. Discover how we source single-cultivar tencha directly from Kyoto and whisk it with ceremony and respect.',
    tags: ['Matcha', 'Tea Craft', 'Kyoto', 'Barista Guides'],
    sections: [
      {
        heading: 'The Shaded Fields of Uji, Kyoto',
        body: [
          'The hills of Uji in southern Kyoto have been the holy land of Japanese green tea cultivation for over eight centuries. In spring, approximately four weeks prior to harvest, growers erect black shading screens (tana) over the Camellia sinensis tea bushes.',
          'Deprived of direct sunlight, the plant frantically pumps chlorophyll into its leaves, turning an electric emerald green while converting astringent catechins into sweet, umami-rich L-theanine amino acids.',
          'Only the tender top two leaves of the first harvest (ichibancha) are hand-plucked. These leaves are immediately steamed to halt oxidation, dried into tencha, and ground on slow granite stone mills. A single stone mill turns for one hour to produce just 30 grams of ceremonial powder.',
        ],
        quote: 'True ceremonial matcha does not need sugar to mask its flavor. It greets the palate with silky umami, sweet pea shoots, and calm clarity.',
      },
      {
        heading: 'The Physics of the Chasen Bamboo Whisk',
        body: [
          'You cannot mix true matcha with a metal fork or a handheld battery frother. The traditional chasen—carved by hand from a single culm of aged bamboo into 100 micro-tines—is an irreplaceable acoustic tool.',
          'Water temperature is paramount: boiling water (100°C) will immediately scald the delicate amino acids, resulting in bitter lawn-mower astringency. We whisk at strictly 75°C (167°F).',
          'Using a rapid "W" or "M" motion originating from the wrist rather than the elbow, the bamboo tines entrain air into the liquid suspension, yielding a dense, micro-velvet jade foam resembling the head on a freshly poured stout.',
        ],
        specs: [
          { label: 'Matcha Origin', value: 'Uji, Kyoto Prefecture, Japan' },
          { label: 'Cultivar', value: '100% Okumidori First Flush' },
          { label: 'Water Temp', value: '75°C (never boiling)' },
          { label: 'Ratio', value: '2.5g matcha to 60ml filtered water' },
        ],
      },
      {
        heading: 'Bridging Traditions at The Copper Mill',
        body: [
          'We serve our matcha in two distinct preparations: traditional Usucha in a warm ceramic chawan bowl with a sesame biscuit, and as an iced oat flat white sweetened solely with a whisper of raw organic agave.',
          'L-theanine promotes alpha brain-wave activity, providing sustained calm alertness without the rapid spikes or crashes of caffeine alone. It has rightfully earned its sacred place beside our espresso menu.',
        ],
      },
    ],
  },
];
