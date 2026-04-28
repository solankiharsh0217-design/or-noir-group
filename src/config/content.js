const DIVISION_LINKS = {
  tattoo: "https://or-noir-v1.base44.app",
  art: "https://or-noir-art-gallery-v1.base44.app",
  manga: "https://or-noir-background-manga-v1.base44.app",
};

const DIVISION_IMAGES = {
  hero: "https://ornoirtattoogallery.ch/wp-content/uploads/2024/06/photo_2023-12-10_16-02-23.jpg",
  tattoo: "https://ornoirtattoogallery.ch/wp-content/uploads/2024/06/photo_2023-12-10_16-02-09.jpg",
  studio: "https://ornoirtattoogallery.ch/wp-content/uploads/2024/06/photo_2023-12-10_16-02-32-1024x768.jpg",
  detail: "https://ornoirtattoogallery.ch/wp-content/uploads/2024/06/photo_2023-12-10_16-02-26.jpg",
};

const sharedDivisions = {
  tattoo: {
    link: DIVISION_LINKS.tattoo,
    image: DIVISION_IMAGES.tattoo,
  },
  art: {
    link: DIVISION_LINKS.art,
    image: DIVISION_IMAGES.detail,
  },
  manga: {
    link: DIVISION_LINKS.manga,
    image: DIVISION_IMAGES.studio,
  },
};

const content = {
  en: {
    NAV: {
      logo: "OR NOIR",
      strapline: "Institutional Holding Site",
      homeLabel: "Home",
      links: [
        { label: "The Group", path: "/group" },
        { label: "Our Divisions", path: "/divisions" },
        { label: "Institutional Contact", path: "/contact" },
      ],
      cta: "Contact the Group",
      ctaPath: "/contact",
    },
    HOME: {
      hero: {
        eyebrow: "OR NOIR GROUP",
        headline1: "ONE CREATIVE",
        headline2: "POWERHOUSE.",
        subheadline:
          "The institutional home of three premium artistic disciplines: tattooing, sculptural mixed media, and handcrafted diorama worlds.",
        supporting:
          "Designed as the brand above the brands, Or Noir Group brings together distinct practices under one exacting vision of permanence, atmosphere, and authorship.",
        cta: "Discover the Divisions",
        secondaryCta: "Read the Group Story",
        image: DIVISION_IMAGES.hero,
      },
      statement: {
        eyebrow: "THE SYSTEM",
        headline: "THREE IDENTITIES. ONE DESIGN DNA.",
        body:
          "Each division speaks with its own voice, but they all live inside the same premium world: dark palettes, disciplined typography, cinematic spacing, and imagery that leads every experience.",
      },
      divisions: {
        eyebrow: "OUR DIVISIONS",
        headline: "THE BRANDS INSIDE THE OR NOIR WORLD.",
        subheadline:
          "Every division is deliberately different in medium and audience, yet immediately recognizable as part of the same family.",
        cards: [
          {
            name: "Or Noir Tattoo Gallery",
            category: "Tattoo Division",
            description:
              "A house of tattooing across Switzerland and Germany, with custom work, an academy, and a franchising network built around premium studio culture.",
            cta: "Visit Tattoo Gallery",
            ...sharedDivisions.tattoo,
          },
          {
            name: "Or Noir Art Gallery",
            category: "Fine Art Division",
            description:
              "Dark sculptural works and bespoke mixed-media objects shaped from skulls, metal, instruments, cables, and industrial materiality.",
            cta: "Explore Art Gallery",
            ...sharedDivisions.art,
          },
          {
            name: "Or Noir Background Manga",
            category: "Diorama Division",
            description:
              "Commissioned miniature worlds spanning fantasy, science fiction, anime, and Japanese village scenes, all built by hand for collectors.",
            cta: "Discover Background Manga",
            ...sharedDivisions.manga,
          },
        ],
      },
      outlook: {
        eyebrow: "WHY IT MATTERS",
        headline: "A GROUP BUILT FOR LASTING WORK.",
        items: [
          {
            title: "Shared Standards",
            detail: "Every division is held to the same standard of finish, atmosphere, and artistic conviction.",
          },
          {
            title: "Different Audiences",
            detail: "The group structure makes room for different mediums without diluting the clarity of the overall brand.",
          },
          {
            title: "Scalable Vision",
            detail: "Or Noir is designed to grow as a cultural brand, not just as a single studio or product line.",
          },
        ],
      },
    },
    GROUP: {
      hero: {
        eyebrow: "THE GROUP",
        headline: "A HOLDING BRAND FOR DISTINCT CREATIVE WORLDS.",
        subheadline:
          "Institutional in posture, selective in partnerships, and deliberate about how every division expresses the wider Or Noir identity.",
      },
      story: {
        eyebrow: "STORY AND PHILOSOPHY",
        headline: "NOT A COLLECTION OF PROJECTS. A SINGLE CREATIVE SYSTEM.",
        paragraphs: [
          "Or Noir Group exists to hold and articulate a family of artistic practices that share a common sensibility: dark elegance, material precision, and work made to endure beyond trend cycles.",
          "The purpose of the holding brand is not to flatten those practices into sameness. It is to give them a coherent framework, a disciplined visual language, and a common institutional voice.",
        ],
      },
      founder: {
        eyebrow: "FOUNDER'S VISION",
        headline: "BUILDING CULTURE, NOT JUST OUTPUT.",
        body:
          "The founding vision behind Or Noir is to create an ecosystem where tattooing, object-making, and world-building can be experienced as parallel expressions of the same artistic seriousness.",
        body2:
          "That perspective shapes how the group presents itself: minimal where it should be minimal, commanding where it should be commanding, and always led by the work itself.",
      },
      values: {
        eyebrow: "GROUP PRINCIPLES",
        headline: "THE FRAMEWORK BEHIND THE BRANDS.",
        items: [
          {
            title: "Discipline",
            detail: "A shared rigor in execution, presentation, and craft across every division.",
          },
          {
            title: "Atmosphere",
            detail: "A coherent visual world built through darkness, texture, restraint, and spatial generosity.",
          },
          {
            title: "Authorship",
            detail: "Every division is rooted in a clear point of view rather than generic commercial styling.",
          },
          {
            title: "Legacy",
            detail: "The group is designed to support durable work, long-term relationships, and cultural presence.",
          },
        ],
      },
      connections: {
        eyebrow: "HOW THE DIVISIONS CONNECT",
        headline: "THREE MEDIUMS, ONE OR NOIR SIGNATURE.",
        items: [
          {
            title: "Tattoo",
            detail: "Permanence on skin through precision, ritual, and studio experience.",
          },
          {
            title: "Art",
            detail: "Sculptural objects that turn darkness, texture, and found materials into singular statement pieces.",
          },
          {
            title: "Diorama",
            detail: "Immersive miniature worlds built with collector-level attention to detail and atmosphere.",
          },
        ],
      },
    },
    DIVISIONS: {
      hero: {
        eyebrow: "OUR DIVISIONS",
        headline: "THREE CREATIVE IDENTITIES INSIDE ONE PREMIUM WORLD.",
        subheadline:
          "Each division carries its own tone, audience, and visual emphasis while remaining unmistakably part of Or Noir Group.",
      },
      items: [
        {
          eyebrow: "OR NOIR TATTOO GALLERY",
          headline: "THE HOUSE OF TATTOOING.",
          body:
            "Aspirational rather than utilitarian, the tattoo division positions itself as a maison: custom work, premium environments, academy training, and a growth model that extends into franchising.",
          highlights: [
            "Two active studio locations: Rorschach and Wiesbaden",
            "Tattoo school positioned as a key brand and revenue pillar",
            "Flexible payment and voucher model already active in the live business",
          ],
          cta: "Visit Tattoo Gallery",
          link: DIVISION_LINKS.tattoo,
          image: DIVISION_IMAGES.tattoo,
          tone: "dark",
        },
        {
          eyebrow: "OR NOIR ART GALLERY",
          headline: "SCULPTURAL MIXED-MEDIA WORKS.",
          body:
            "The fine art division centers on one-off handcrafted pieces: wall-mounted sculpture, furniture, and object work with gothic mood, industrial materials, and dramatic physical presence.",
          highlights: [
            "Dark, textured, and materially expressive presentation",
            "Commission-led positioning instead of commodity retail",
            "Strong emphasis on uniqueness, process, and atmosphere",
          ],
          cta: "Open Art Gallery Reference",
          link: DIVISION_LINKS.art,
          image: DIVISION_IMAGES.detail,
          tone: "light",
        },
        {
          eyebrow: "OR NOIR BACKGROUND MANGA",
          headline: "HANDCRAFTED WORLDS IN MINIATURE.",
          body:
            "The diorama division focuses on made-to-order fantasy and sci-fi scenes, anime-inspired environments, and collector commissions that reward immersion, detail, and narrative atmosphere.",
          highlights: [
            "Commission model built around franchise, characters, scene, scale, and budget",
            "Collector-facing positioning with handcrafted value at the center",
            "Visual language rooted in miniature depth, mood, and cinematic world-building",
          ],
          cta: "Open Background Manga Reference",
          link: DIVISION_LINKS.manga,
          image: DIVISION_IMAGES.studio,
          tone: "dark",
        },
      ],
    },
    CONTACT: {
      hero: {
        eyebrow: "INSTITUTIONAL CONTACT",
        headline: "PRESS, PARTNERSHIPS, AND GROUP-LEVEL CONVERSATIONS.",
        subheadline:
          "This channel is reserved for institutional enquiries. Division-specific client bookings should be directed to the relevant brand.",
      },
      info: {
        label: "Group Office",
        company: "Or Noir Group",
        address: "Kirchstrasse 27, 9400 Rorschach, Switzerland",
        email: "info@ornoirtattoogallery.com",
        phone: "+41 78 912 20 80",
        addressLabel: "Office",
        emailLabel: "Email",
        phoneLabel: "Phone",
        routingLabel: "Routing",
        routing: [
          "Press and editorial features",
          "Brand partnerships and exhibitions",
          "Institutional and investment enquiries",
        ],
      },
      form: {
        eyebrow: "SEND AN ENQUIRY",
        headline: "TELL US WHO YOU ARE AND WHAT THIS CONVERSATION IS ABOUT.",
        helper:
          "Submitting this form opens a pre-addressed email so the enquiry can be routed through the live business inbox.",
        subject: "Or Noir Group institutional enquiry",
        fields: {
          name: "Your name",
          email: "Email address",
          organization: "Organization or publication",
          type: "Enquiry type",
          typeOptions: ["Press", "Partnership", "Institutional", "Investment", "Other"],
          message: "Message",
        },
        cta: "Prepare Email",
        success: "Your enquiry is ready to send.",
        emailCta: "Open email draft",
        resetCta: "Edit enquiry",
      },
    },
    FOOTER: {
      tagline: "The institutional layer of the Or Noir world.",
      linksTitle: "Navigate",
      links: [
        { label: "Home", path: "/" },
        { label: "The Group", path: "/group" },
        { label: "Our Divisions", path: "/divisions" },
        { label: "Institutional Contact", path: "/contact" },
      ],
      divisionsTitle: "Division References",
      divisions: [
        { label: "Tattoo Gallery", link: DIVISION_LINKS.tattoo },
        { label: "Art Gallery", link: DIVISION_LINKS.art },
        { label: "Background Manga", link: DIVISION_LINKS.manga },
      ],
      copyright: "Or Noir Group © 2026. All rights reserved.",
    },
  },
  de: {
    NAV: {
      logo: "OR NOIR",
      strapline: "Institutionelle Holding Site",
      homeLabel: "Start",
      links: [
        { label: "Die Gruppe", path: "/group" },
        { label: "Unsere Divisionen", path: "/divisions" },
        { label: "Institutioneller Kontakt", path: "/contact" },
      ],
      cta: "Die Gruppe kontaktieren",
      ctaPath: "/contact",
    },
    HOME: {
      hero: {
        eyebrow: "OR NOIR GROUP",
        headline1: "EINE KREATIVE",
        headline2: "KRAFTZENTRALE.",
        subheadline:
          "Das institutionelle Zuhause von drei hochwertigen künstlerischen Disziplinen: Tattoo, skulpturale Mixed Media, und handgefertigte Diorama-Welten.",
        supporting:
          "Als Marke über den Marken vereint Or Noir Group unterschiedliche Praktiken unter einer präzisen Vision von Dauerhaftigkeit, Atmosphäre und Autorenschaft.",
        cta: "Divisionen entdecken",
        secondaryCta: "Die Geschichte der Gruppe",
        image: DIVISION_IMAGES.hero,
      },
      statement: {
        eyebrow: "DAS SYSTEM",
        headline: "DREI IDENTITÄTEN. EINE DESIGN-DNA.",
        body:
          "Jede Division spricht mit eigener Stimme, lebt aber in derselben Premium-Welt: dunkle Paletten, disziplinierte Typografie, filmische Abstände und Bildführung durch starke Motive.",
      },
      divisions: {
        eyebrow: "UNSERE DIVISIONEN",
        headline: "DIE MARKEN IM OR NOIR KOSMOS.",
        subheadline:
          "Jede Division unterscheidet sich bewusst in Medium und Publikum und bleibt doch sofort als Teil derselben Familie erkennbar.",
        cards: [
          {
            name: "Or Noir Tattoo Gallery",
            category: "Tattoo-Division",
            description:
              "Ein Haus des Tätowierens in der Schweiz und in Deutschland mit Custom Work, Academy und einem Franchising-Modell rund um Premium-Studiokultur.",
            cta: "Tattoo Gallery besuchen",
            ...sharedDivisions.tattoo,
          },
          {
            name: "Or Noir Art Gallery",
            category: "Fine-Art-Division",
            description:
              "Dunkle skulpturale Arbeiten und maßgefertigte Mixed-Media-Objekte aus Schädeln, Metall, Instrumenten, Kabeln und industrieller Materialität.",
            cta: "Art Gallery erkunden",
            ...sharedDivisions.art,
          },
          {
            name: "Or Noir Background Manga",
            category: "Diorama-Division",
            description:
              "Auftragsarbeiten in Miniaturwelten aus Fantasy, Science Fiction, Anime und japanischen Dorf-Szenen für Sammler.",
            cta: "Background Manga entdecken",
            ...sharedDivisions.manga,
          },
        ],
      },
      outlook: {
        eyebrow: "WARUM DAS RELEVANT IST",
        headline: "EINE GRUPPE FÜR ARBEIT MIT BESTAND.",
        items: [
          {
            title: "Gemeinsame Standards",
            detail: "Jede Division wird an denselben Maßstäben für Ausführung, Atmosphäre und künstlerische Überzeugung gemessen.",
          },
          {
            title: "Unterschiedliche Zielgruppen",
            detail: "Die Gruppenstruktur schafft Raum für verschiedene Medien, ohne die Klarheit der Marke zu verwässern.",
          },
          {
            title: "Skalierbare Vision",
            detail: "Or Noir ist als kulturelle Marke gedacht, nicht nur als einzelnes Studio oder Produkt.",
          },
        ],
      },
    },
    GROUP: {
      hero: {
        eyebrow: "DIE GRUPPE",
        headline: "EINE HOLDING-MARKE FÜR UNTERSCHIEDLICHE KREATIVE WELTEN.",
        subheadline:
          "Institutionell in ihrer Haltung, selektiv in Partnerschaften und bewusst darin, wie jede Division die größere Or Noir Identität ausdrückt.",
      },
      story: {
        eyebrow: "GESCHICHTE UND PHILOSOPHIE",
        headline: "KEINE SAMMLUNG VON PROJEKTEN. EIN EINHEITLICHES KREATIVES SYSTEM.",
        paragraphs: [
          "Or Noir Group existiert, um eine Familie künstlerischer Praktiken zu tragen und sichtbar zu machen, die dieselbe Sensibilität teilen: dunkle Eleganz, materielle Präzision und Arbeiten mit Dauer.",
          "Die Aufgabe der Holding-Marke ist nicht, diese Praktiken in Gleichförmigkeit zu pressen. Sie gibt ihnen einen kohärenten Rahmen, eine disziplinierte Bildsprache und eine gemeinsame institutionelle Stimme.",
        ],
      },
      founder: {
        eyebrow: "DIE VISION DES GRÜNDERS",
        headline: "KULTUR AUFBAUEN, NICHT NUR OUTPUT.",
        body:
          "Die Gründungsidee von Or Noir war es, ein Ökosystem zu schaffen, in dem Tätowierung, Objektkunst und Weltbau als parallele Ausdrucksformen derselben künstlerischen Ernsthaftigkeit erlebt werden.",
        body2:
          "Diese Perspektive bestimmt auch die Haltung der Gruppe: minimal, wo Minimalismus Stärke erzeugt, souverän, wo Souveränität nötig ist, und immer vom Werk selbst geführt.",
      },
      values: {
        eyebrow: "GRUPPENPRINZIPIEN",
        headline: "DER RAHMEN HINTER DEN MARKEN.",
        items: [
          {
            title: "Disziplin",
            detail: "Ein gemeinsamer Anspruch an Ausführung, Präsentation und Handwerk in jeder Division.",
          },
          {
            title: "Atmosphäre",
            detail: "Eine zusammenhängende visuelle Welt aus Dunkelheit, Textur, Zurückhaltung und großzügigem Raum.",
          },
          {
            title: "Autorschaft",
            detail: "Jede Division ist in einer klaren Perspektive verankert und nicht in austauschbarer Markenoptik.",
          },
          {
            title: "Beständigkeit",
            detail: "Die Gruppe unterstützt Arbeit mit Langzeitwert, tragfähige Beziehungen und kulturelle Präsenz.",
          },
        ],
      },
      connections: {
        eyebrow: "WIE DIE DIVISIONEN ZUSAMMENHÄNGEN",
        headline: "DREI MEDIEN, EINE OR NOIR SIGNATUR.",
        items: [
          {
            title: "Tattoo",
            detail: "Dauerhaftigkeit auf der Haut durch Präzision, Ritual und Studioerlebnis.",
          },
          {
            title: "Art",
            detail: "Skulpturale Objekte, die Dunkelheit, Textur und gefundene Materialien in singuläre Stücke verwandeln.",
          },
          {
            title: "Diorama",
            detail: "Immersive Miniaturwelten mit Sammler-Niveau an Detailtiefe und Atmosphäre.",
          },
        ],
      },
    },
    DIVISIONS: {
      hero: {
        eyebrow: "UNSERE DIVISIONEN",
        headline: "DREI KREATIVE IDENTITÄTEN IN EINER PREMIUM-WELT.",
        subheadline:
          "Jede Division hat ihren eigenen Ton, ihr Publikum und ihre visuelle Schwerpunktsetzung und bleibt doch unverkennbar Teil von Or Noir Group.",
      },
      items: [
        {
          eyebrow: "OR NOIR TATTOO GALLERY",
          headline: "DAS HAUS DES TÄTOWIERENS.",
          body:
            "Die Tattoo-Division ist aspirativ statt rein funktional positioniert: Custom Work, hochwertige Räume, Academy-Ausbildung und ein Wachstumsmodell bis ins Franchising.",
          highlights: [
            "Zwei aktive Studios: Rorschach und Wiesbaden",
            "Tattoo School als zentrale Marken- und Umsatzsäule",
            "Flexible Zahlung und Voucher-Modell bereits im Live-Betrieb",
          ],
          cta: "Tattoo Gallery besuchen",
          link: DIVISION_LINKS.tattoo,
          image: DIVISION_IMAGES.tattoo,
          tone: "dark",
        },
        {
          eyebrow: "OR NOIR ART GALLERY",
          headline: "SKULPTURALE MIXED-MEDIA-ARBEITEN.",
          body:
            "Die Fine-Art-Division fokussiert sich auf handgefertigte Unikate: Wandskulpturen, Möbel und Objektarbeiten mit gothischer Stimmung, industriellen Materialien und starker physischer Präsenz.",
          highlights: [
            "Dunkle, texturierte und materiell geprägte Präsentation",
            "Kommissionsorientierung statt standardisiertem Shop",
            "Klare Betonung von Einzigartigkeit, Prozess und Atmosphäre",
          ],
          cta: "Art Gallery Referenz öffnen",
          link: DIVISION_LINKS.art,
          image: DIVISION_IMAGES.detail,
          tone: "light",
        },
        {
          eyebrow: "OR NOIR BACKGROUND MANGA",
          headline: "HANDGEFERTIGTE WELTEN IM KLEINFORMAT.",
          body:
            "Die Diorama-Division konzentriert sich auf Auftragsarbeiten in Fantasy- und Sci-Fi-Szenen, Anime-Umgebungen und Sammlerwelten, die von Detail, Atmosphäre und Immersion leben.",
          highlights: [
            "Auftragsmodell rund um Franchise, Figuren, Szene, Maßstab und Budget",
            "Sammlerfokus mit handwerklichem Wert im Zentrum",
            "Visuelle Sprache aus Miniatur-Tiefe, Stimmung und filmischem Worldbuilding",
          ],
          cta: "Background Manga Referenz öffnen",
          link: DIVISION_LINKS.manga,
          image: DIVISION_IMAGES.studio,
          tone: "dark",
        },
      ],
    },
    CONTACT: {
      hero: {
        eyebrow: "INSTITUTIONELLER KONTAKT",
        headline: "PRESSE, PARTNERSCHAFTEN UND GESPRÄCHE AUF GRUPPENEBENE.",
        subheadline:
          "Dieser Kanal ist für institutionelle Anfragen vorgesehen. Kundenbuchungen sollten an die jeweilige Division gehen.",
      },
      info: {
        label: "Group Office",
        company: "Or Noir Group",
        address: "Kirchstrasse 27, 9400 Rorschach, Switzerland",
        email: "info@ornoirtattoogallery.com",
        phone: "+41 78 912 20 80",
        addressLabel: "Büro",
        emailLabel: "E-Mail",
        phoneLabel: "Telefon",
        routingLabel: "Weiterleitung",
        routing: [
          "Presse und Editorial-Anfragen",
          "Markenpartnerschaften und Ausstellungen",
          "Institutionelle und Investment-Gespräche",
        ],
      },
      form: {
        eyebrow: "ANFRAGE SENDEN",
        headline: "SAGEN SIE UNS, WER SIE SIND UND WORUM ES GEHT.",
        helper:
          "Beim Absenden wird eine vorbereitete E-Mail geöffnet, damit die Anfrage über den aktiven Business-Posteingang weitergeleitet werden kann.",
        subject: "Institutionelle Anfrage an Or Noir Group",
        fields: {
          name: "Ihr Name",
          email: "E-Mail-Adresse",
          organization: "Organisation oder Publikation",
          type: "Anfrageart",
          typeOptions: ["Presse", "Partnerschaft", "Institutionell", "Investment", "Sonstiges"],
          message: "Nachricht",
        },
        cta: "E-Mail vorbereiten",
        success: "Ihre Anfrage ist bereit.",
        emailCta: "E-Mail-Entwurf öffnen",
        resetCta: "Anfrage bearbeiten",
      },
    },
    FOOTER: {
      tagline: "Die institutionelle Ebene der Or Noir Welt.",
      linksTitle: "Navigation",
      links: [
        { label: "Start", path: "/" },
        { label: "Die Gruppe", path: "/group" },
        { label: "Unsere Divisionen", path: "/divisions" },
        { label: "Institutioneller Kontakt", path: "/contact" },
      ],
      divisionsTitle: "Divisionen",
      divisions: [
        { label: "Tattoo Gallery", link: DIVISION_LINKS.tattoo },
        { label: "Art Gallery", link: DIVISION_LINKS.art },
        { label: "Background Manga", link: DIVISION_LINKS.manga },
      ],
      copyright: "Or Noir Group © 2026. Alle Rechte vorbehalten.",
    },
  },
  it: {
    NAV: {
      logo: "OR NOIR",
      strapline: "Sito istituzionale della holding",
      homeLabel: "Home",
      links: [
        { label: "Il Gruppo", path: "/group" },
        { label: "Le Divisioni", path: "/divisions" },
        { label: "Contatto istituzionale", path: "/contact" },
      ],
      cta: "Contatta il Gruppo",
      ctaPath: "/contact",
    },
    HOME: {
      hero: {
        eyebrow: "OR NOIR GROUP",
        headline1: "UNA PIATTAFORMA",
        headline2: "CREATIVA UNICA.",
        subheadline:
          "La casa istituzionale di tre discipline artistiche premium: tatuaggio, scultura mixed media, e mondi in miniatura realizzati a mano.",
        supporting:
          "Pensata come il brand sopra i brand, Or Noir Group riunisce pratiche diverse sotto una visione comune di permanenza, atmosfera e autorialità.",
        cta: "Scopri le divisioni",
        secondaryCta: "Leggi la storia del gruppo",
        image: DIVISION_IMAGES.hero,
      },
      statement: {
        eyebrow: "IL SISTEMA",
        headline: "TRE IDENTITA. UNA SOLA DNA VISIVA.",
        body:
          "Ogni divisione ha una voce propria, ma vive dentro lo stesso mondo premium: palette scure, tipografia disciplinata, spazi cinematografici e immagini che guidano l'esperienza.",
      },
      divisions: {
        eyebrow: "LE NOSTRE DIVISIONI",
        headline: "I BRAND CHE ABITANO L'UNIVERSO OR NOIR.",
        subheadline:
          "Ogni divisione si distingue per medium e pubblico, ma resta immediatamente riconoscibile come parte della stessa famiglia.",
        cards: [
          {
            name: "Or Noir Tattoo Gallery",
            category: "Divisione Tattoo",
            description:
              "Una maison del tatuaggio tra Svizzera e Germania, con custom work, academy e una rete franchising costruita intorno a una cultura di studio premium.",
            cta: "Visita Tattoo Gallery",
            ...sharedDivisions.tattoo,
          },
          {
            name: "Or Noir Art Gallery",
            category: "Divisione Fine Art",
            description:
              "Opere scultoree dark e oggetti mixed media su misura, costruiti con teschi, metallo, strumenti musicali, cavi e materie industriali.",
            cta: "Esplora Art Gallery",
            ...sharedDivisions.art,
          },
          {
            name: "Or Noir Background Manga",
            category: "Divisione Diorama",
            description:
              "Mondi in miniatura su commissione tra fantasy, fantascienza, anime e scene di villaggi giapponesi, pensati per collezionisti.",
            cta: "Scopri Background Manga",
            ...sharedDivisions.manga,
          },
        ],
      },
      outlook: {
        eyebrow: "PERCHE CONTA",
        headline: "UN GRUPPO PENSATO PER OPERE CHE DURANO.",
        items: [
          {
            title: "Standard condivisi",
            detail: "Ogni divisione risponde agli stessi criteri di esecuzione, atmosfera e rigore artistico.",
          },
          {
            title: "Pubblici diversi",
            detail: "La struttura di gruppo apre a medium differenti senza diluire la chiarezza del brand.",
          },
          {
            title: "Visione scalabile",
            detail: "Or Noir e pensato per crescere come brand culturale, non solo come singolo studio o prodotto.",
          },
        ],
      },
    },
    GROUP: {
      hero: {
        eyebrow: "IL GRUPPO",
        headline: "UN BRAND HOLDING PER MONDI CREATIVI DISTINTI.",
        subheadline:
          "Istituzionale nell'impostazione, selettivo nelle partnership e attento a come ogni divisione esprime l'identita più ampia di Or Noir.",
      },
      story: {
        eyebrow: "STORIA E FILOSOFIA",
        headline: "NON UNA COLLEZIONE DI PROGETTI. UN SISTEMA CREATIVO COERENTE.",
        paragraphs: [
          "Or Noir Group nasce per sostenere e rendere leggibile una famiglia di pratiche artistiche che condividono la stessa sensibilità: eleganza dark, precisione materica e opere pensate per durare oltre i cicli delle tendenze.",
          "Il compito del brand holding non è rendere tutto uguale. È dare a queste pratiche una cornice coerente, un linguaggio visivo disciplinato e una voce istituzionale comune.",
        ],
      },
      founder: {
        eyebrow: "VISIONE DEL FONDATORE",
        headline: "COSTRUIRE CULTURA, NON SOLO OUTPUT.",
        body:
          "L'idea fondativa di Or Noir è creare un ecosistema in cui tatuaggio, arte oggettuale e world-building possano essere vissuti come espressioni parallele della stessa serietà artistica.",
        body2:
          "Questa prospettiva definisce anche il modo in cui il gruppo si presenta: minimale quando il minimale è forza, autorevole quando serve autorevolezza, e sempre guidato dalle opere stesse.",
      },
      values: {
        eyebrow: "PRINCIPI DEL GRUPPO",
        headline: "LA STRUTTURA DIETRO I BRAND.",
        items: [
          {
            title: "Disciplina",
            detail: "Un rigore condiviso nell'esecuzione, nella presentazione e nel mestiere.",
          },
          {
            title: "Atmosfera",
            detail: "Un mondo visivo coerente fatto di oscurità, texture, misura e spazio.",
          },
          {
            title: "Autorialità",
            detail: "Ogni divisione è radicata in un punto di vista chiaro, non in una estetica commerciale generica.",
          },
          {
            title: "Eredità",
            detail: "Il gruppo sostiene lavori con valore durevole, relazioni di lungo periodo e presenza culturale.",
          },
        ],
      },
      connections: {
        eyebrow: "COME SI COLLEGANO LE DIVISIONI",
        headline: "TRE MEDIUM, UNA STESSA FIRMA OR NOIR.",
        items: [
          {
            title: "Tattoo",
            detail: "Permanenza sulla pelle attraverso precisione, rituale e esperienza di studio.",
          },
          {
            title: "Art",
            detail: "Oggetti scultorei che trasformano oscurità, texture e materiali trovati in pezzi unici.",
          },
          {
            title: "Diorama",
            detail: "Mondi immersivi in miniatura con un livello di dettaglio e atmosfera da collezione.",
          },
        ],
      },
    },
    DIVISIONS: {
      hero: {
        eyebrow: "LE NOSTRE DIVISIONI",
        headline: "TRE IDENTITA CREATIVE DENTRO UN SOLO MONDO PREMIUM.",
        subheadline:
          "Ogni divisione ha un tono, un pubblico e un'enfasi visiva propri, ma resta chiaramente parte di Or Noir Group.",
      },
      items: [
        {
          eyebrow: "OR NOIR TATTOO GALLERY",
          headline: "LA MAISON DU TATOUAGE.",
          body:
            "La divisione tattoo si presenta in modo aspirazionale, non utilitario: custom work, ambienti premium, formazione academy e un modello di crescita che include il franchising.",
          highlights: [
            "Due studi attivi: Rorschach e Wiesbaden",
            "Tattoo School come pilastro centrale di brand e ricavi",
            "Pagamenti flessibili e voucher già presenti nel business reale",
          ],
          cta: "Visita Tattoo Gallery",
          link: DIVISION_LINKS.tattoo,
          image: DIVISION_IMAGES.tattoo,
          tone: "dark",
        },
        {
          eyebrow: "OR NOIR ART GALLERY",
          headline: "OPERE SCULTOREE MIXED MEDIA.",
          body:
            "La divisione fine art ruota intorno a pezzi unici artigianali: sculture da parete, arredi e oggetti con atmosfera gotica, materiali industriali e forte presenza fisica.",
          highlights: [
            "Presentazione dark, materica e fortemente testurizzata",
            "Posizionamento su commissione invece di retail standard",
            "Forte enfasi su unicità, processo e atmosfera",
          ],
          cta: "Apri il riferimento Art Gallery",
          link: DIVISION_LINKS.art,
          image: DIVISION_IMAGES.detail,
          tone: "light",
        },
        {
          eyebrow: "OR NOIR BACKGROUND MANGA",
          headline: "MONDI FATTI A MANO IN MINIATURA.",
          body:
            "La divisione diorama si concentra su commissioni fantasy e sci-fi, ambienti anime e scene per collezionisti, costruite attorno a dettaglio, atmosfera e immersione.",
          highlights: [
            "Modello su commissione basato su franchise, personaggi, scena, scala e budget",
            "Posizionamento collezionistico con il valore artigianale al centro",
            "Linguaggio visivo fondato su profondità miniaturistica e world-building cinematografico",
          ],
          cta: "Apri il riferimento Background Manga",
          link: DIVISION_LINKS.manga,
          image: DIVISION_IMAGES.studio,
          tone: "dark",
        },
      ],
    },
    CONTACT: {
      hero: {
        eyebrow: "CONTATTO ISTITUZIONALE",
        headline: "STAMPA, PARTNERSHIP E CONVERSAZIONI A LIVELLO DI GRUPPO.",
        subheadline:
          "Questo canale è riservato a richieste istituzionali. Le prenotazioni clienti devono essere indirizzate alla divisione corretta.",
      },
      info: {
        label: "Group Office",
        company: "Or Noir Group",
        address: "Kirchstrasse 27, 9400 Rorschach, Switzerland",
        email: "info@ornoirtattoogallery.com",
        phone: "+41 78 912 20 80",
        addressLabel: "Ufficio",
        emailLabel: "Email",
        phoneLabel: "Telefono",
        routingLabel: "Instradamento",
        routing: [
          "Richieste stampa ed editoriali",
          "Partnership di brand e mostre",
          "Confronti istituzionali e investimenti",
        ],
      },
      form: {
        eyebrow: "INVIA UNA RICHIESTA",
        headline: "RACCONTACI CHI SEI E DI COSA VUOI PARLARE.",
        helper:
          "L'invio apre una email precompilata così la richiesta può essere gestita tramite l'inbox attivo del business.",
        subject: "Richiesta istituzionale Or Noir Group",
        fields: {
          name: "Il tuo nome",
          email: "Indirizzo email",
          organization: "Organizzazione o pubblicazione",
          type: "Tipo di richiesta",
          typeOptions: ["Stampa", "Partnership", "Istituzionale", "Investimento", "Altro"],
          message: "Messaggio",
        },
        cta: "Prepara email",
        success: "La tua richiesta è pronta.",
        emailCta: "Apri la bozza email",
        resetCta: "Modifica richiesta",
      },
    },
    FOOTER: {
      tagline: "Il livello istituzionale dell'universo Or Noir.",
      linksTitle: "Navigazione",
      links: [
        { label: "Home", path: "/" },
        { label: "Il Gruppo", path: "/group" },
        { label: "Le Divisioni", path: "/divisions" },
        { label: "Contatto istituzionale", path: "/contact" },
      ],
      divisionsTitle: "Riferimenti divisioni",
      divisions: [
        { label: "Tattoo Gallery", link: DIVISION_LINKS.tattoo },
        { label: "Art Gallery", link: DIVISION_LINKS.art },
        { label: "Background Manga", link: DIVISION_LINKS.manga },
      ],
      copyright: "Or Noir Group © 2026. Tutti i diritti riservati.",
    },
  },
};

export default content;
