export type Couleur = {
  id: number;
  name: string;
  hexcode: string;
};

export type NewCouleur = Omit<Couleur, 'id'>;
