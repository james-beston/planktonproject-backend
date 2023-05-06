// Documents
import home from './documents/home';
import page from './documents/page';
import post from './documents/post';
import otherSpecies from './documents/other-species';

// Objects
import content from './objects/content';
import speciesData from './objects/species-data';

// Phytoplankton
import diatoms from './phytoplankton/diatoms';
import dinoflagalletes from './phytoplankton/dinoflagalletes';
import otherPhytoplankton from './phytoplankton/other-phytoplankton';

// Zooplankton: Crustaceans
import copepods from './zooplankton/crustaceans/copepods';
import nauplii from './zooplankton/crustaceans/nauplii';
import zoea from './zooplankton/crustaceans/zoea';
import otherCrustaceans from './zooplankton/crustaceans/other-crustaceans';

// Zooplankton: Molluscs
import molluscs from './zooplankton/molluscs';

// Zooplankton: Worms
import platyhelmithes from './zooplankton/worms/platyhelmithes';
import polychaeta from './zooplankton/worms/polychaeta';
import otherWorms from './zooplankton/worms/other-worms';

// Zooplankton: Other
import cnidaria from './zooplankton/cnidaria';
import foraminifera from './zooplankton/foraminifera';
import ciliates from './zooplankton/ciliates';
import otherZooplankton from './zooplankton/other-zooplankton';

export const schemaTypes = [
  ciliates,
  cnidaria,
  content,
  copepods,
  diatoms,
  dinoflagalletes,
  foraminifera,
  home,
  molluscs,
  nauplii,
  otherCrustaceans,
  otherPhytoplankton,
  otherSpecies,
  otherWorms,
  otherZooplankton,
  page,
  platyhelmithes,
  polychaeta,
  post,
  speciesData,
  zoea,
]
