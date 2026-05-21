/**
 * program controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::program.program',
  ({ strapi }) => ({

    async find(ctx) {
      // Forzar populate
      ctx.query = {
        ...ctx.query,
        populate: {
          program_type: true,
          image: true,
          ...((ctx.query.populate as object) || {}),
        },
      };

      const { data, meta } = await super.find(ctx);

      return { data, meta };
    },

    async findOne(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: {
          program_type: true,
          image: true,
          ...((ctx.query.populate as object) || {}),
        },
      };

      const { data, meta } = await super.findOne(ctx);

      return { data, meta };
    },

  })
);