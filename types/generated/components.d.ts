import type { Schema, Struct } from '@strapi/strapi';

export interface SharedInversion extends Struct.ComponentSchema {
  collectionName: 'components_shared_inversions';
  info: {
    displayName: 'inversion';
  };
  attributes: {
    cuotas: Schema.Attribute.Integer;
    matricula: Schema.Attribute.Decimal;
    n_matricula: Schema.Attribute.Integer;
    valor_cuota: Schema.Attribute.Decimal;
  };
}

export interface SharedMallaCurricular extends Struct.ComponentSchema {
  collectionName: 'components_shared_malla_curriculars';
  info: {
    displayName: 'malla_curricular';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    electivos: Schema.Attribute.Relation<'oneToMany', 'api::curso.curso'>;
    primer_semestres: Schema.Attribute.Relation<
      'oneToMany',
      'api::curso.curso'
    >;
    segundo_semestres: Schema.Attribute.Relation<
      'oneToMany',
      'api::curso.curso'
    >;
  };
}

export interface SharedPresentacion extends Struct.ComponentSchema {
  collectionName: 'components_shared_presentacions';
  info: {
    displayName: 'presentacion';
  };
  attributes: {
    objetivo_general: Schema.Attribute.Text;
    objetivos_especificos: Schema.Attribute.Text;
    perfil_posgraduado: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.inversion': SharedInversion;
      'shared.malla-curricular': SharedMallaCurricular;
      'shared.presentacion': SharedPresentacion;
    }
  }
}
