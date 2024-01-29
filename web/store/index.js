export const state = () => ({
  dogs: {
    golden: {
      id: 0,
      name: 'Golden Retriever',
      description: `"Der Golden Retriever ist ein mittelgroßer Familienhund, der im
        19. Jahrhundert in Großbritannien gezüchtet wurde, um erlegte
        Wasservögel wie Enten und Gänse zu apportieren. Golden Retriever
        sind besonders freundlich, verspielt und anhänglich – egal ob
        gegenüber Kindern, Erwachsenen oder anderen Haustieren."`,
      source:
        'https://mein-golden-retriever.de/golden-retriever/alles-ueber-golden-retriever/',
      sourceDescription: 'www.mein-golden-retriever.de',
      personality: 'anhänglich, leichtführig, treu, anpassungsfähig',
      images: [
        {
          path: 'golden',
          alt: 'Bild eines Golden Retrievers',
          src: 'https://thumbs.dreamstime.com/b/golden-retriever-sitting-cliff-beautiful-canadian-mountain-landscape-background-golden-retriever-sitting-cliff-167934560.jpg',
        },
        {
          path: 'golden2',
          alt: 'Bild eines Golden Retrievers',
          src: 'https://www.istockphoto.com/de/foto/golden-retriever-auf-dem-feld-mit-gelben-blumen-gm1248529734-363646168',
        },
        {
          path: 'golden3',
          alt: 'Bild eines Golden Retrievers',
          src: 'https://pixabay.com/de/',
        },
      ],
    },
    samojede: {
      id: 1,
      name: 'Samojede',
      description: `"Mit seinem beeindruckenden, weißen Fell und der fröhlichen Art 
      zählt der Samojede, auch bekannt unter dem Namen Samoiedskaia Sabaka, zu den 
      beliebtesten Schlittenhunderassen der Welt. [...] Der Samojede ist ein aufgeschlossener 
      und herzlicher Familienhund, der eine enge Bindung zur gesamten Familie aufbaut. Er ist 
      sehr menschenbezogen, sanft und anhänglich. Hektik und Aggression sind ihm fremd und er 
      besitzt eine beruhigende Ausstrahlung. Die plüschigen Hunde lieben es, gestreichelt und 
      gekrault zu werden und sind nicht gerne alleine. Mit fremden Hunden oder anderen Haustieren 
      haben die intelligenten Hunde in der Regel kein Problem. Die Arbeit mit ihren Menschen bereitet 
      ihnen große Freude, wobei sie jedoch gerne ihren eigenen Kopf durchsetzen. Unterwürfigkeit 
      und blinder Gehorsam sind den mutigen Hunden fremd. Ist ein Samojede ein Anfängerhund? 
      Trotz seines leicht zu erziehenden Charakters ist der Samojede aufgrund seiner hohen 
      Anforderungen kein guter Anfängerhund."`,
      source: 'https://www.mein-haustier.de/hunderassen/samojede/',
      sourceDescription: 'www.mein-haustier.de',
      personality: 'anhänglich, freundlich, lebhaft, aufgeschlossen',
      images: [
        {
          path: 'samojede',
          alt: 'Bild eines Samojeden',
          src: 'https://www.raphaelaschiller.de/wp-content/uploads/2021/02/002-Raphaela-Schiller-Hundefotografie-Hunde-Fotoshooting-Samojede-Rheinfelden-Basel-Loerrach.jpg',
        },
        {
          path: 'samoyed2',
          alt: 'Bild eines Samojeden',
          src: 'https://pixabay.com/de/',
        },
        {
          path: 'samoyed3',
          alt: 'Bild eines Samojeden',
          src: 'https://pixabay.com/de/',
        },
      ],
    },
    gsd: {
      id: 2,
      name: 'Deutscher Schäferhund',
      description: `"Der Deutsche Schäferhund ist der absolute Prototyp des Hundes. Es wird wohl kaum eine Gegend auf diesem Globus geben, wo man ihn nicht kennt. Der Deutsche Schäferhund ist ein mittelgroßer, kräftiger, stockhaariger oder langstockhaariger Hund mit stehenden Ohren. Seine Erscheinung erinnert auf den ersten Blick an einen Wolf. Der Deutsche Schäferhund ist ein in besonders intensiver Weise mit dem Menschen verbundener Hund. Er will mit dem Menschen arbeiten und braucht diese gemeinsame Arbeit auch, um ein artgerechtes Leben führen zu können. Es ist erstaunlich, wie gut sich diese Hunde führen und ausbilden lassen. [...] Auf einer solchen Grundlage sind Deutsche Schäferhunde ausgeglichene, nervenstarke, fürsorgliche und treue Familienhunde. Sie passen sich flexibel und problemlos den Lebensgewohnheiten ihrer Familie an. Der Deutsche Schäferhund ist robust und pflegeleicht."`,
      source:
        'https://www.zooroyal.de/magazin/hunde/hunderassen/deutscher-schaeferhund/',
      sourceDescription: 'www.zooroyal.de',
      personality: 'selbstsicher, intelligent, treu, arbeitswillig',
      images: [
        {
          path: 'shepherd',
          alt: 'Bild eines Deutschen Schäferhundes',
          src: 'https://w0.peakpx.com/wallpaper/971/924/HD-wallpaper-german-shepherd-german-walk-shepherd-dog.jpg',
        },
        {
          path: 'gsd2',
          alt: 'Bild eines Deutschen Schäferhundes',
          src: 'https://pixabay.com/de/',
        },
        {
          path: 'gsd3',
          alt: 'Bild eines Deutschen Schäferhundes',
          src: 'https://pixabay.com/de/',
        },
      ],
    },
    husky: {
      id: 3,
      name: 'Siberian Husky',
      description: `"Der Siberian Husky, kurz Husky genannt, ist eine der urwüchsigsten Hunderassen. Er hat unverwechselbare Erscheinung. Ein Husky verkörpert Wildnis, erinnert sofort an Stammvater Wolf. Tatsächlich zählt er zu den genetisch am engsten mit dem Wolf verwandten Hunderassen. Der Husky ist ein moderner und zugleich archaischer Hund. In seinem Wesen lebt viel Wölfisches auch wenn er – rein genetisch gesehen – nicht näher mit ihm verwandt ist als andere Hunde. Huskys sind stille aber hervorragende Beobachter und können etwa blitzschnell und äußerst präzise ein Stück Wurst vom Teller klauen. Sie machen nicht viel Aufheben um ihr Handeln. Allenfalls vor einen gemeinsamen Ausflug geht ihnen das Temperament durch. Huskys sind hervorragende Jäger. Zu ihren Menschen sind sie freundlich und sanftmütig. Der Husky ist zwar kein ausgemachter Wachhund aber durchaus bereit, seine Familie effektiv zu verteidigen."`,
      source:
        'https://www.zooroyal.de/magazin/hunde/hunderassen/siberian-husky/',
      sourceDescription: 'www.zooroyal.de',
      personality: 'willensstark, verspielt, freundlich, aufmerksam',
      images: [
        {
          path: 'husky',
          alt: 'Bild eines Huskys',
          src: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Download-Siberian-Husky-Photo.jpg',
        },
        {
          path: 'husky2',
          alt: 'Bild eines Huskys',
          src: 'https://pixabay.com/de/',
        },
        {
          path: 'husky3',
          alt: 'Bild eines Huskys',
          src: 'https://pixabay.com/de/',
        },
      ],
    },
    corgi: {
      id: 4,
      name: 'Welsh Corgi Pembroke',
      description: `"Der Corgi stammt aus Wales. Er ist ein alter Treib-, Hüte- und Wachhund, ein Ur-Waliser. Unverwechselbar ist seine Erscheinung. Er hat den Körper eines mittelgroßen Schäferhundes steht aber auf den kurzen Beinen eines Dackels. Corgis dienten in der hügeligen Landschaft von Wales als Allround-Werkzeug der Bauern, Hirten und Handwerker. Sie bewachten Haus und Hof. Insbesondere machten sie sich als Treib- und Hütehunde nützlich. Der Corgi ist ein ausgesprochen cleverer Hund, den man nicht unterschätzen sollte. Er hat die Gene eines Arbeitshundes auch heute noch. Corgi-Kenner berichten, dass die Hunde ohne irgendeine Ausbildung das KnowHow besitzen, eine Herde zu hüten und zu treiben. Darüber hinaus ist er ja auch noch ein Wächter und Beschützer."`,
      source: 'https://www.zooroyal.de/magazin/hunde/hunderassen/corgi/',
      sourceDescription: 'www.zooroyal.de',
      personality: 'wachsam, aktiv, intelligent, ausgeglichen',
      images: [
        {
          path: 'corgi',
          alt: 'Bild eines Corgis',
          src: 'https://pixabay.com/de/photos/pembroke-welsh-corgi-hund-haustier-6644600/',
        },
        {
          path: 'corgi2',
          alt: 'Bild eines Corgis',
          src: 'https://pixabay.com/de/',
        },
        {
          path: 'corgi3',
          alt: 'Bild eines Corgis',
          src: 'https://pixabay.com/de/',
        },
      ],
    },
    bordercollie: {
      id: 5,
      name: 'Bordercollie',
      description: `"Der Border Collie ist ein mittelgroßer, sportlich und elegant auftretender Hund. Du kannst spüren, dass diese Eleganz aus seiner hohen Leistungsfähigkeit resultiert. Er hat einen hellwachen, aufmerksamen, freundlichen Blick, ohne jedoch nervös zu wirken. Die komplexen Anforderungen an seine Hütearbeit, die er unter schwierigen Bedingungen selbständig, aber zugleich exakt nach den Vorgaben des Schäfers auszuführen hat, haben den wohl intelligentesten aller Hunde entstehen lassen. Es ist absolut meisterlich wie ein guter Border Collie seine Schafherde kontrollieren kann."`,
      source: 'https://www.zooroyal.de/magazin/hunde/border-collie/',
      sourceDescription: 'www.zooroyal.de',
      personality: 'intelligent, aktiv, freundlich, agil',
      images: [
        {
          path: 'bordercollie',
          alt: 'Bild eines Bordercollies',
          src: 'https://i2.wp.com/www.broadmeadows.de/wp-content/uploads/2022/03/Broadmeadows_Border-Collies_2022_02-13-48-von-171.jpg',
        },
        {
          path: 'collie2',
          alt: 'Bild eines Bordercollies',
          src: 'https://pixabay.com/de/',
        },
        {
          path: 'collie3',
          alt: 'Bild eines Bordercollies',
          src: 'https://pixabay.com/de/',
        },
      ],
    },
  },
});

export const getters = {
  getDogs(state) {
    return state.dogs;
  },
};

export const actions = {
  // fetch
};
