import "./meetOurTeam_v1.scss";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import ppNA from "../../assets/images/pp/NA_BW.webp";
import ppSH from "../../assets/images/pp/SH_BW.webp";
import ppLC from "../../assets/images/pp/LC_BW.webp";
import ppMS from "../../assets/images/pp/MS_BW.webp";
import ppND from "../../assets/images/pp/ND_BW.webp";

export default function MeetOurTeam(): ReactElement {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "NELLY AHOBAUT",
      image: ppNA,
      imageAlt: "Nelly Ahobaut portrait",
      role: "LA PRÉSIDENTE",
      bio: "Elle a commencé sa carrière dans le recrutement et la formation d'hôtesse d'accueil dans le secteur de l'Événementiel. Son goût pour la vente s'est révélé lors de ses 3 années au sein d'une entreprise de formation en anglais, avant d'évoluer dans l'encadrement d'un plateau de télémarketing. La suite l'a poussée à s'ouvrir au secteur de la vente à distance dans une entreprise qui lui a donné l'opportunité d'accroître ses compétences, jusqu'à en devenir la Directrice générale. Forte de ces expériences, elle décide de se lancer dans l'entrepreneuriat et d'apporter sa propre vision du Management et de la Relation Client.",
    },
    {
      name: "NICOLAS DECRESSAC",
      image: ppND,
      imageAlt: "Nicolas Decressac portrait",
      role: "LE DIRECTEUR TECHNIQUE",
      bio: "Son parcours atypique (imprimeur puis libraire avant de se pencher sur l'usinage d'implants pour l'optique) l'a amené à se tourner vers la configuration et le service client pour de grandes marques. Il a connu l'entrepreneuriat dans la maintenance informatique avant de retourner au salariat sur un poste de Développeur dans l'entreprise de Vente à Distance où il a rencontré Nelly. Ses idées avant-gardistes et son implication dans sa passion, ont donné vie à une vision qu'ensemble ils partagent. Sa capacité d'adaptation et son ouverture d'esprit permettent à ANTL d'exprimer son projet dans une énergie innovante et dynamique. En un mot, il est le Magicien de l'Équipe.",
    },
    {
      name: "SONIA HADID",
      image: ppSH,
      imageAlt: "Sonia Hadid portrait",
      role: "LA RESPONSABLE COMMERCIAL",
      bio: "C'est à l'étranger qu'elle s'initie à la vente à distance au sein de plusieurs centres d'appels renommés. Repérée par l'un d'entre eux pour ses qualités relationnelles et ses compétences techniques, elle est repérée par Nelly qui l'appelle en France pour y suivre une formation en management. Tout en assurant la gestion d'équipes de commerciaux qu'elle forme puis supervise, ses résultats la projettent progressivement en haut de la pyramide. On lui confie des équipes plus importantes, puis la gestion d'un centre de profit. 15 ans d'expérience dans la vente à Distance dont 10 à des postes à responsabilité en font la candidate idéale à la tête de la Production d'ANTL, un projet dans lequel elle croit dès sa présentation et qu'elle porte avec une conviction et une fidélité exceptionnelles.",
    },
    {
      name: "LAËTITIA CASTANET",
      image: ppLC,
      imageAlt: "Laëtitia Castanet portrait",
      role: "LA RESPONSABLE QUALITÉ",
      bio: "Sa compréhension du fonctionnement humain trouve racine dans une intelligence émotionnelle très développée. Une qualité rare remarquée par Nelly, qui la prépare au poste de Formatrice dans l'entreprise où elles se sont rencontrées. Elle se distingue des autres collaborateurs par sa capacité de résilience, sa rigueur dans le travail et la précision de ses analyses, résultats d'une expérience transversale. Un savant mélange de ses acquis dans les mondes de l'entrepreneuriat et du salariat, auxquels s'ajoutent une passion pour son élevage de Chats. Cette personnalité hors du commun a choisi d'exprimer ses talents au sein de l'équipe d'ANTL où elle assure le contrôle de la qualité du Discours et des process.",
    },
    {
      name: "MEHDI SAAD ALLAH",
      image: ppMS,
      imageAlt: "Mehdi Saad Allah portrait",
      role: "LE RESPONSABLE ADMINISTRATIF",
      bio: "Prenez 5 années dans l'armée, 2 ans dans la logistique et une petite expérience en tant que téléconseiller; ajoutez-y 5 années en vol pour des compagnies aériennes de renom, et vous obtenez le combo parfait pour assurer \"La Vitrine d'ANTL\". Un zeste de passion pour la photographie et les jeux vidéo, sont les ingrédients qui suffisent à convaincre Nelly de lui proposer de l'accompagner dans l'aventure ANTL. Il devient son appui, son second, son binôme dans la politique de communication et l'image de la marque. Ses qualités organisationnelles et relationnelles en font un acteur central, il est en charge de tout l'aspect administratif de l'entreprise et soigne son image sur les plateformes.",
    },
  ];

  return (
    <section
      id="meetOurTeamComponent"
      className="meetOurTeam container"
    >
      <header className="meetOurTeamHeader">
        <h2
          className="meetOurTeamTitle"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-out-back"
          data-aos-delay="200"
        >
          {t("meetOurTeam.title")}
        </h2>
      </header>

      <div className="teamGrid">
        {teamMembers.map(function (member, index) {
          const delay = 900 + index * 100;
          const memberClass = `member-${index}`;

          return (
            <article
              key={index}
              className={`teamMemberCard ${memberClass}`}
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
              data-aos-delay={delay}
            >
              <img
                src={member.image}
                alt={member.imageAlt}
                className="memberImage"
                loading="lazy"
              />
              <div className="memberOverlay">
                <div className="memberContent">
                  <p className="memberRole">{member.role}</p>
                  <h3 className="memberName">{member.name}</h3>
                  <p className="memberBio">{member.bio}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div
        className="teamAction"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-out-back"
        data-aos-delay="1200"
      >
        <Link to="/contact_us" className="joinTeamLink">
          <span className="linkText">{t("meetOurTeam.cta")}</span>
          <span className="linkArrow">→</span>
        </Link>
      </div>
    </section>
  );
}
