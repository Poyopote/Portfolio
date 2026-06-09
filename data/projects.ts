export interface Project {
  id: number
  buttonTitle: string
  title: string
  descriptionHtml: string
  layout: 'Single' | 'Grid' | 'List' | 'Square'
  media: string[]
  figmaEmbed?: string
}

const projects: Project[] = [
  {
    id: 2,
    buttonTitle: 'Kabuki',
    title: 'Affiche <u>Kabuki</u>',
    descriptionHtml: `
      <div class="tag-skill">
        <ul><li>Illustrator</li><li>Photoshop</li></ul>
      </div>
      <p>L'affiche <strong>Kabuki</strong> a été conçue comme une création publicitaire destinée à promouvoir le spectacle éponyme. Ce projet avait pour objectif principal de m'initier au logiciel <strong>Illustrator</strong>. Il m'était demandé de créer une illustration vectorielle en sélectionnant parmi plusieurs éléments iconographiques proposés, qui servirait ensuite de base pour la conception de l'affiche.</p>
      <p>Une fois l'illustration réalisée, j'ai intégré le résultat dans un fichier <strong>Photoshop</strong>, où j'ai pris en charge la conception globale de l'affiche en y ajoutant les éléments textuels et le logo.</p>
      <p>Ce qui m'a demandé des efforts particuliers, en plus de découvrir le logiciel, c'est de travailler sur chaque élément de manière individuelle, en les combinant ensuite. Et de m'essayer à des styles auxquels je ne suis pas habitué ou vers lesquels je ne suis pas naturellement attiré. Grâce à ce projet, j'ai acquis de <u>nouvelles compétences</u> et j'ai pu repousser mes limites en tant que concepteur graphique.</p>
    `,
    layout: 'Single',
    media: ['/img/Projet_Kabuki-Affiche.webp'],
  },
  {
    id: 3,
    buttonTitle: 'Flow',
    title: '<u>Flow,</u> musique en streaming',
    descriptionHtml: `
      <div class="tag-skill">
        <ul><li>Illustrator</li><li>Photoshop</li></ul>
      </div>
      <p><strong>Flow</strong> est un <u>mini-projet</u> de maquette réalisé dans le cadre du module de design interactif. L'objectif était de créer une <strong>maquette sur Photoshop</strong> et de présenter une plateforme de musique en streaming similaire à <strong>Spotify ou Deezer</strong>. L'idée n'était pas de concevoir un design ambitieux, mais d'illustrer des éléments de sites facilement reconnaissables et intuitifs, en incluant des <strong>interactions telles qu'un en-tête, une bannière, une navigation, un pied de page, des boutons, etc.</strong></p>
      <p>Le nom "Flow" trouve son origine dans plusieurs sources. D'une part, il évoque le <u>mouvement</u>, ce qui est parfait pour promouvoir un site de musique. Mais ce qui différencie <strong>Flow</strong>, c'est sa spécialisation dans la promotion de la <u>productivité au travail</u>. Son objectif est d'aider les utilisateurs à atteindre un état de «Flow» qui, en psychologie positive, représente une satisfaction optimale liée à une concentration totale.</p>
      <p>La construction de ce projet s'est déroulée en deux étapes. Tout d'abord, il y a eu la conception de la marque fictive, comprenant la création du logo, du slogan et des objectifs. Cela impliquait d'étudier les pratiques de la concurrence et d'effectuer une analyse de marché. La deuxième étape consistait à présenter une maquette, en simulant un véritable site de musique.</p>
    `,
    layout: 'Grid',
    media: [
      '/img/Flow-logo1.png',
      '/img/Flow-logo4.png',
      '/img/Flow-maquette.webp',
      '/img/Flow-logo3.png',
      '/img/Flow-logo2.png',
    ],
  },
  {
    id: 4,
    buttonTitle: 'Ré.édifica',
    title: '<u>Ré.édifica</u>, Le forum RP',
    descriptionHtml: `
      <div class="tag-skill">
        <ul>
          <li>HTML</li><li>SASS</li><li>Bootstrap</li><li>JavaScript</li>
          <li>jQuery</li><li>PHP</li><li>(Symfony) Twig</li><li>SQL</li>
          <li>Axure</li><li>Photoshop</li><li>Illustrator</li><li>Clip Studio Paint</li>
        </ul>
        <a class="reedifica" href="https://poyopote.github.io/Reedifica/" target="_blank" rel="noreferrer">
          <img src="/svg/Reedifica-logo_favicon.svg" alt="Logo du forum RP" class="h-6 inline-block" loading="lazy" /> Voir site →
        </a>
        <a class="github-link" href="https://github.com/Poyopote/Reedifica/tree/main" target="_blank" rel="noreferrer">
          Github <i class="devicon-github-original"></i>
        </a>
      </div>
      <p><strong>Ré.édifica</strong> est un site construit sur les bases d'un forum <abbr title="Role-Playing">RP</abbr>, dont le nom trouve son origine dans le terme <u>"réédification"</u>, symbolisant la volonté de reconstruire. L'histoire de <strong>Ré.édifica</strong> puise son inspiration dans une bande dessinée en cours de réalisation, intitulée "Chronicle of Célestins" et créée par Vensty Reverse, mon nom d'artiste.</p>
      <details>
        <summary>Qu'est-ce que le <strong>RP</strong> (Role-Playing) ?</summary>
        <p>Sur un forum RP, les participants peuvent incarner des personnages fictifs et interagir avec d'autres joueurs dans un monde imaginaire. Il ne faut pas confondre cela avec le terme RPG qui désigne un genre de jeu vidéo. L'imagination des utilisateurs se réunit sur un forum RP pour créer une histoire collaborative.</p>
      </details>
      <p>Ce site a été mon <u>projet final</u> concluant mon année de licence, mettant en valeur les <u>compétences acquises</u> tout au long de mon cursus universitaire. Pour la réalisation de ce projet, j'ai dû prendre en compte certaines obligations et critères imposés, ce qui a influencé le choix des langages que j'ai utilisés afin de répondre aux exigences du <strong>cahier des charges</strong> et pour atteindre les objectifs fixés.</p>
    `,
    layout: 'List',
    media: [
      '/svg/Reedifica-logo_complet.svg',
      '/img/Reedifica-img02.webp',
      '/img/Reedifica-img03.webp',
    ],
  },
  {
    id: 5,
    buttonTitle: 'Sakadanse',
    title: 'Sakadanse',
    descriptionHtml: `
      <div class="tag-skill">
        <ul><li>Figma</li></ul>
        <a class="sakadanse" href="https://www.figma.com/file/kcDtIqt7LgVVVbOVnMJjOU/Untitled?type=design&node-id=0%3A1&mode=design&t=SmdGlvk3MvT6BHNT-1" target="_blank" rel="noreferrer">
          Voir maquette →
        </a>
      </div>
      <p><strong>Sakadanse</strong> est un <u>projet indépendant</u> visant à créer un site <strong>d'information événementielle</strong> axé sur la <strong>danse</strong>. L'objectif principal du site est de présenter les événements liés à la danse qui ont lieu dans les <u>grandes métropoles</u>. Pour ce projet, j'ai utilisé l'outil de conception Figma. Bien que j'aie déjà eu l'occasion d'utiliser cet outil lors de <u>précédentes expériences scolaires et de stages</u>, j'ai souhaité <u>approfondir ma maîtrise</u> en créant une maquette qui se rapprocherait le plus possible d'un aspect professionnel, tout en étant <strong>adaptative et accessible</strong>.</p>
    `,
    layout: 'Square',
    media: ['/img/Projet_Sakadanse-Desktop01-square.webp'],
    figmaEmbed: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FkcDtIqt7LgVVVbOVnMJjOU%2FUntitled%3Ftype%3Ddesign%26node-id%3D2%253A487%26t%3DeZnVTigHOY1rkJXF-1',
  },
  {
    id: 6,
    buttonTitle: 'Audibert',
    title: '<u>Audibert</u> batiment',
    descriptionHtml: `
      <div class="tag-skill">
        <ul>
          <li>Wordpress</li><li>HTML</li><li>CSS</li><li>PHP</li>
          <li>Figma</li><li>Photoshop</li><li>Illustrator</li>
          <li>SemRush</li><li>SEO Meta</li>
        </ul>
        <a class="audibert" href="https://audibert-batiment.fr/" target="_blank" rel="noreferrer">
          Voir le site →
        </a>
      </div>
      <p>Pendant mon stage chez <a href="https://www.irenetcora.com/" target="_blank" rel="noreferrer">Iren &amp; Cora ↗</a> j'ai eu l'opportunité de travailler sur le projet <strong>Audibert Bâtiment,</strong> spécialisé dans la rénovation, le décapage, les travaux de peinture, les revêtements et la pose de parquet dans les Alpes-Maritimes (06) et le Var (83). J'ai été responsable de la <strong>création du logo</strong> de l'entreprise, de la gestion du site web en tant que <u>webmaster en chef,</u> de l'<strong>optimisation SEO,</strong> de la <strong>sémantique du site,</strong> et de l'élaboration de stratégies pour maximiser la visibilité en ligne, renforçant ainsi la présence de l'entreprise sur le marché.</p>
    `,
    layout: 'List',
    media: [
      '/img/Audibert-logo-colore.webp',
      '/img/aerogommage-sur-mur-en-pierre.webp',
    ],
  },
]

export default projects
