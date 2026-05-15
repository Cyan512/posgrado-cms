/**
 * home controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::home.home', ({ strapi }) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
                content: {
                    on: {
                        'home.hero': {
                            populate: {
                                image: {
                                    populate: {
                                        src: true
                                    }
                                },
                                links: {
                                    populate: true
                                }
                            }
                        },
                        'home.about': {
                            populate: {
                                image: {
                                    populate: {
                                        src: true
                                    }
                                }
                            }
                        },
                        'home.admission-process': {
                            populate: {
                                image: {
                                    populate: {
                                        src: true
                                    }
                                },
                                steps: {
                                    populate: {
                                        image: {
                                            populate: {
                                                src: true
                                            }
                                        },
                                    }
                                },
                                link: {
                                    populate: true
                                }
                            }
                        },
                        'home.announcements': {
                            populate: {
                                announcements: {
                                    populate: {
                                        image: {
                                            populate: {
                                                src: true
                                            }
                                        },
                                    }
                                },
                                link: {
                                    populate: true
                                }
                            }
                        }
                    },
                },
            },
        };

        const { data, meta } = await super.find(ctx);

        return { data, meta };
    },
}));