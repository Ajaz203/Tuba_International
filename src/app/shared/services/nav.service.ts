import { Injectable } from '@angular/core';

// Menu
export interface Menu {
  items?: Menu[]
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  megaMenu?: boolean;
  image?: string;
  active?: boolean;
  badge?: boolean;
  badgeText?: string;
  badgeIcon?: boolean;
  children?: Menu[];
  level?: number;
  section?: Menu[]
  right?: boolean;
  url?: string
}


@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  public MENUITEMS: Menu[] = [
    
    {
      title: "Home",
      // type: 'sub',
      // active: false,
      // level: 1,
      // children: [
      //   {
      //     title: 'Hotel Demo',
      //     type: 'sub',
      //     active: false,
      //     level: 2,
      //     children: [
      //       {
      //         title: 'classic',
      //         path: '/home/hotel/classic',
      //         type: 'link'
      //       },
      //       {
      //         title: 'minimal',
      //         path: '/home/hotel/minimal',
      //         type: 'link'
      //       },
      //       {
      //         title: 'vector',
      //         path: '/home/hotel/vector',
      //         type: 'link'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'Tour Demo',
      //     type: 'sub',
      //     active: false,
      //     level: 2,
      //     children: [
      //       {
      //         title: 'modern',
      //         path: '/home/tour/modern',
      //         type: 'link'
      //       },
      //       {
      //         title: 'trending',
      //         path: '/home/tour/trending',
      //         type: 'link'
      //       },
      //       {
      //         title: 'Vector demo',
      //         path: '/home/tour/vector',
      //         type: 'link'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'Cab Demo',
      //     type: 'sub',
      //     active: false,
      //     level: 2,
      //     children: [
      //       {
      //         title: 'modern',
      //         path: '/home/cab/modern',
      //         type: 'link'
      //       },
      //       {
      //         title: 'classic',
      //         path: '/home/cab/classic',
      //         type: 'link'
      //       },
      //       {
      //         title: 'Map demo',
      //         path: '/home/cab/map-demo',
      //         type: 'link'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'Flight Demo',
      //     type: 'sub',
      //     active: false,
      //     level: 2,
      //     children: [
      //       {
      //         title: 'modern',
      //         path: '/home/flight/modern',
      //         type: 'link'
      //       },
      //       {
      //         title: 'minimal',
      //         path: '/home/flight/minimal',
      //         type: 'link'
      //       },
      //       {
      //         title: 'left sidebar',
      //         path: '/home/flight/left-sidebar',
      //         type: 'link'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'Restaurant Demo',
      //     type: 'sub',
      //     active: false,
      //     level: 2,
      //     children: [
      //       {
      //         title: 'classic',
      //         path: '/home/restaurant/classic',
      //         type: 'link'
      //       },
      //       {
      //         title: 'minimal',
      //         path: '/home/restaurant/minimal',
      //         type: 'link'
      //       },
      //     ]
      //   },
      //   {
      //     title: 'Mix Demo',
      //     type: 'sub',
      //     active: false,
      //     level: 2,
      //     children: [
      //       {
      //         title: 'classic',
      //         path: '/home/mix-demo/classic',
      //         type: 'link'
      //       },
      //       {
      //         title: 'minimal',
      //         path: '/home/mix-demo/minimal',
      //         type: 'link'
      //       },
      //     ]
      //   },
      // ]
    },
    {
      title: "flight",
      type: "sub",
      active: false,
      level: 1,
      children: [
        {
          title: 'Search Flights',
          path: '/home/flight/modern',
          type: 'link'
        },
        {
          title: 'Flights Fair',
          path: '/flight/listing/left-sidebar',
          type: 'link',
          level: 3,
        },
        {
          title: 'book now',
          path: '/flight/booking/book-now',
          type: 'link',
          level: 3,
        },
        // {
        //   title: "search",
        //   type: "sub",
        //   active: false,
        //   level: 2,
        //   children: [

        //     {
        //       title: 'left sidebar',
        //       path: '/flight/listing/left-sidebar',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'right sidebar',
        //       path: '/flight/listing/right-sidebar',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'top filter',
        //       path: '/flight/listing/top-filter',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'round trip',
        //       path: '/flight/listing/round-trip',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'not found',
        //       path: '/flight/listing/not-found',
        //       type: 'link',
        //       level: 3,
        //     },
        //   ]
        // },

        // {
        //   title: "booking",
        //   type: "sub",
        //   active: false,
        //   level: 2,
        //   children: [


        //     {
        //       title: 'booking add-ons',
        //       path: '/flight/booking/book-add-ons',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'booking payment',
        //       path: '/flight/booking/booking-payment',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'booking success',
        //       path: '/flight/booking/flight-booking-success',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'booking failed',
        //       path: '/flight/booking/flight-booking-failed',
        //       type: 'link',
        //       level: 3,
        //     },
        //   ]
        // }
      ]
    },
    {
      title: "cab",
      type: "sub",
      active: false,
      level: 1,
      children: [
        {
          title: 'Cab Details',
          path: '/home/cab/classic',
          type: 'link'
        },
        {
          title: 'Cab Rentals',
          path: '/cab/single-details',
          type: 'link',
          level: 2,
        },
        {
          title: 'book Now',
          path: '/cab/booking/booking',
          type: 'link',
          level: 3,
        },
        // {
        //   title: "Listing",
        //   type: "sub",
        //   active: false,
        //   level: 2,
        //   children: [
        //     {
        //       title: "list view",
        //       type: "sub",
        //       active: false,
        //       level: 3,
        //       children: [
        //         {
        //           title: "left sidebar",
        //           path: "/cab/listing/list-view/left-sidebar",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "right sidebar",
        //           path: "/cab/listing/list-view/right-sidebar",
        //           type: "link",
        //           level: 4,
        //         },
        //       ]
        //     },
        //     {
        //       title: "grid view",
        //       type: "sub",
        //       active: false,
        //       level: 3,
        //       children: [
        //         {
        //           title: "3 grid",
        //           path: "/cab/listing/grid-view/3-grid",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "4 grid",
        //           path: "/cab/listing/grid-view/4-grid",
        //           type: "link",
        //           level: 4,
        //         },
        //       ]
        //     },
        //     {
        //       title: "sidebar",
        //       type: "sub",
        //       active: false,
        //       level: 3,
        //       children: [
        //         {
        //           title: "left sidebar",
        //           path: "/cab/listing/sidebar/left-sidebar",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "right sidebar",
        //           path: "/cab/listing/sidebar/right-sidebar",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "no sidebar",
        //           path: "/cab/listing/sidebar/no-sidebar",
        //           type: "link",
        //           level: 4,
        //         },
        //       ]
        //     },
        //     {
        //       title: "with map",
        //       type: "sub",
        //       active: false,
        //       level: 3,
        //       children: [
        //         {
        //           title: "google map",
        //           path: "/cab/listing/map/google-map",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "leaflet map",
        //           path: "/cab/listing/map/leaflet-map",
        //           type: "link",
        //           level: 4,
        //         },
        //       ]
        //     },
        //     {
        //       title: "slider",
        //       path: "/cab/listing/slider",
        //       type: "link",
        //       level: 3,
        //     },
        //     {
        //       title: "not found",
        //       path: "/cab/listing/not-found",
        //       type: "link",
        //       level: 3,
        //     },
        //   ]
        // },

        // {
        //   title: "booking",
        //   type: "sub",
        //   active: false,
        //   level: 2,
        //   children: [
        //     {
        //       title: 'booking payment',
        //       path: '/cab/booking/booking-payment',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'booking success',
        //       path: '/cab/booking/booking-success',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'booking failed',
        //       path: '/cab/booking/booking-failed',
        //       type: 'link',
        //       level: 3,
        //     },
        //   ]
        // },
      ]
    },
    {
      title: "hotel",
      type: "sub",
      active: false,
      level: 1,
      children: [
        {
          title: 'Stays',
          path: '/home/hotel/minimal',
          type: 'link'
          
        },
        {
          title: 'book Now',
          path: '/hotel/booking/hotel-booking',
          type: 'link',
          level: 3,
        },
        // {
        //   title: "Listing",
        //   type: "sub",
        //   active: false,
        //   level: 2,
        //   children: [
        //     {
        //       title: "grid view",
        //       type: "sub",
        //       active: false,
        //       level: 3,
        //       children: [
        //         {
        //           title: "2 Grid",
        //           path: "/hotel/listing/grid/2-grid",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "3 Grid",
        //           path: "/hotel/listing/grid/3-grid",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "4 Grid",
        //           path: "/hotel/listing/grid/4-grid",
        //           type: "link",
        //           level: 4,
        //         }
        //       ]
        //     },
        //     {
        //       title: "sidebar",
        //       type: "sub",
        //       active: false,
        //       level: 3,
        //       children: [
        //         {
        //           title: "Left Sidebar",
        //           path: "/hotel/listing/sidebar/left-sidebar",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "Right Sidebar",
        //           path: "/hotel/listing/sidebar/right-sidebar",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "No Sidebar",
        //           path: "/hotel/listing/sidebar/no-sidebar",
        //           type: "link",
        //           level: 4,
        //         }
        //       ]
        //     },
        //     {
        //       title: "map",
        //       type: "sub",
        //       active: false,
        //       level: 3,
        //       children: [
        //         {
        //           title: "google map",
        //           path: "/hotel/listing/map/google-map",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "leaflet map",
        //           path: "/hotel/listing/map/leaflet-map",
        //           type: "link",
        //           level: 4,
        //         },
        //       ]
        //     },
        //     {
        //       title: "map modal",
        //       type: "sub",
        //       active: false,
        //       level: 3,
        //       children: [
        //         {
        //           title: "google map",
        //           path: "/hotel/listing/map-modal/google-map",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "leaflet map",
        //           path: "/hotel/listing/map-modal/leaflet-map",
        //           type: "link",
        //           level: 4,
        //         },
        //       ]
        //     },
        //     {
        //       title: "onclick map",
        //       type: "sub",
        //       active: false,
        //       level: 3,
        //       children: [
        //         {
        //           title: "google map",
        //           path: "/hotel/listing/onclick-map/google-map",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "leaflet map",
        //           path: "/hotel/listing/onclick-map/leaflet-map",
        //           type: "link",
        //           level: 4,
        //         },
        //       ]
        //     },
        //     {
        //       title: "left side map",
        //       type: "sub",
        //       active: false,
        //       level: 3,
        //       children: [
        //         {
        //           title: "google map",
        //           path: "/hotel/listing/leftside-map/google-map",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "leaflet map",
        //           path: "/hotel/listing/leftside-map/leaflet-map",
        //           type: "link",
        //           level: 4,
        //         },
        //       ]
        //     },
        //     {
        //       title: "list view",
        //       type: "sub",
        //       active: false,
        //       level: 3,
        //       children: [
        //         {
        //           title: "List View",
        //           path: "/hotel/listing/list-view/list-view",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "Map",
        //           type: "sub",
        //           active: false,
        //           level: 4,
        //           children: [
        //             {
        //               title: "google map",
        //               path: "/hotel/listing/list-view/map/google-map",
        //               type: "link",
        //               level: 5,
        //             },
        //             {
        //               title: "leaflet map",
        //               path: "/hotel/listing/list-view/map/leaflet-map",
        //               type: "link",
        //               level: 5,
        //             },
        //           ]
        //         },
        //         {
        //           title: 'Slider',
        //           path: '/hotel/listing/list-view/slider',
        //           type: 'link',
        //           level: 4,
        //         },
        //         {
        //           title: 'multiple Image',
        //           path: '/hotel/listing/list-view/multiple-image',
        //           type: 'link',
        //           level: 4,
        //         },
        //         {
        //           title: 'Video',
        //           path: '/hotel/listing/list-view/video',
        //           type: 'link',
        //           level: 4,
        //         },
        //       ]
        //     },
        //     {
        //       title: 'Hotel with Slider',
        //       path: '/hotel/listing/hotel-slider',
        //       type: 'link',
        //       level: 3,
        //     },
        //   ]
        // },
        // {
        //   title: "single page",
        //   type: "sub",
        //   active: false,
        //   level: 2,
        //   children: [
        //     {
        //       title: 'classic',
        //       path: '/hotel/single-page/classic',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'without top',
        //       path: '/hotel/single-page/without-top',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'left sidebar',
        //       path: '/hotel/single-page/left-sidebar',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'info tab',
        //       path: '/hotel/single-page/info-tab',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'image slider',
        //       path: '/hotel/single-page/image-slider',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'thumbnail image',
        //       path: '/hotel/single-page/thumbnail-image',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'image box',
        //       path: '/hotel/single-page/image-box',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'theme breadcrumb',
        //       path: '/hotel/single-page/theme-breadcrumb',
        //       type: 'link',
        //       level: 3,
        //     },
        //   ]
        // },

        // {
        //   title: "booking",
        //   type: "sub",
        //   active: false,
        //   level: 2,
        //   children: [

        //     {
        //       title: 'checkout',
        //       path: '/hotel/booking/checkout',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'booking failed',
        //       path: '/hotel/booking/hotel-booking-failed',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'booking success',
        //       path: '/hotel/booking/hotel-booking-success',
        //       type: 'link',
        //       level: 3,
        //     },
        //   ]
        // }
      ]
    },
    {
      title: "tour",
      type: "sub",
      active: false,
      level: 1,
      children: [
        {
          title: 'Destinations ',
          path: '/home/tour/trending',
          type: 'link'
        },
        {
          title: 'book Now',
          path: '/tour/booking/tour-booking',
          type: 'link',
          level: 3,
        },
        // {
        //   title: "Listing",
        //   type: "sub",
        //   active: false,
        //   level: 2,
        //   children: [
        //     {
        //       title: "grid view",
        //       type: "sub",
        //       active: false,
        //       level: 3,
        //       children: [
        //         {
        //           title: "2 Grid",
        //           path: "/tour/listing/grid/2-grid",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "3 Grid",
        //           path: "/tour/listing/grid/3-grid",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "4 Grid",
        //           path: "/tour/listing/grid/4-grid",
        //           type: "link",
        //           level: 4,
        //         }
        //       ]
        //     },
        //     {
        //       title: "sidebar",
        //       type: "sub",
        //       active: false,
        //       level: 3,
        //       children: [
        //         {
        //           title: "Left Sidebar",
        //           path: "/tour/listing/sidebar/left-sidebar",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "Right Sidebar",
        //           path: "/tour/listing/sidebar/right-sidebar",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: "No Sidebar",
        //           path: "/tour/listing/sidebar/no-sidebar",
        //           type: "link",
        //           level: 4,
        //         }
        //       ]
        //     },
        //     {
        //       title: "list view",
        //       type: "sub",
        //       active: false,
        //       level: 3,
        //       children: [
        //         {
        //           title: "List View",
        //           path: "/tour/listing/list-view/list-view",
        //           type: "link",
        //           level: 4,
        //         },
        //         {
        //           title: 'Slider',
        //           path: '/tour/listing/list-view/slider',
        //           type: 'link',
        //           level: 4,
        //         },
        //         {
        //           title: 'multiple Image',
        //           path: '/tour/listing/list-view/multiple-images',
        //           type: 'link',
        //           level: 4,
        //         },
        //         {
        //           title: 'Video',
        //           path: '/tour/listing/list-view/video',
        //           type: 'link',
        //           level: 4,
        //         },
        //       ]
        //     },
        //     {
        //       title: 'with Slider',
        //       path: '/tour/listing/slider',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'minimal',
        //       path: '/tour/listing/minimal',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'classic',
        //       path: '/tour/listing/classic',
        //       type: 'link',
        //       level: 3,
        //     },

        //   ]
        // },
        // {
        //   title: "single page",
        //   type: "sub",
        //   active: false,
        //   level: 2,
        //   children: [
        //     {
        //       title: 'tab',
        //       path: '/tour/single-page/tab',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'full page detail',
        //       path: '/tour/single-page/full-page-detail',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'slider',
        //       path: '/tour/single-page/slider',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'Full page slider',
        //       path: '/tour/single-page/full-page-slider',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'classic design',
        //       path: '/tour/single-page/classic-design',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'video',
        //       path: '/tour/single-page/video',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'left-sidebar',
        //       path: '/tour/single-page/left-sidebar',
        //       type: 'link',
        //       level: 3,
        //     },
        //   ]
        // },

        // {
        //   title: "booking",
        //   type: "sub",
        //   active: false,
        //   level: 2,
        //   children: [
        //     {
        //       title: 'checkout',
        //       path: '/tour/booking/checkout',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'booking failed',
        //       path: '/tour/booking/tour-booking-failed',
        //       type: 'link',
        //       level: 3,
        //     },
        //     {
        //       title: 'booking success',
        //       path: '/tour/booking/tour-booking-success',
        //       type: 'link',
        //       level: 3,
        //     },
        //   ]
        // }
      ]
    },


    // {
    //   title: "restaurant",
    //   type: "sub",
    //   active: false,
    //   level: 1,
    //   children: [
    //     {
    //       title: "Listing",
    //       type: "sub",
    //       active: false,
    //       level: 2,
    //       children: [
    //         {
    //           title: "grid view",
    //           type: "sub",
    //           active: false,
    //           level: 3,
    //           children: [
    //             {
    //               title: "2 Grid",
    //               path: "/restaurant/listing/grid-view/2-grid",
    //               type: "link",
    //               level: 4,
    //             },
    //             {
    //               title: "3 Grid",
    //               path: "/restaurant/listing/grid-view/3-grid",
    //               type: "link",
    //               level: 4,
    //             },
    //             {
    //               title: "4 Grid",
    //               path: "/restaurant/listing/grid-view/4-grid",
    //               type: "link",
    //               level: 4,
    //             }
    //           ]
    //         },
    //         {
    //           title: "sidebar",
    //           type: "sub",
    //           active: false,
    //           level: 3,
    //           children: [
    //             {
    //               title: "Left Sidebar",
    //               path: "/restaurant/listing/sidebar/left-sidebar",
    //               type: "link",
    //               level: 4,
    //             },
    //             {
    //               title: "Right Sidebar",
    //               path: "/restaurant/listing/sidebar/right-sidebar",
    //               type: "link",
    //               level: 4,
    //             },
    //             {
    //               title: "No Sidebar",
    //               path: "/restaurant/listing/sidebar/no-sidebar",
    //               type: "link",
    //               level: 4,
    //             }
    //           ]
    //         },
    //         {
    //           title: "map",
    //           type: "sub",
    //           active: false,
    //           level: 3,
    //           children: [
    //             {
    //               title: "google map",
    //               path: "/restaurant/listing/map/google-map",
    //               type: "link",
    //               level: 4,
    //             },
    //             {
    //               title: "leaflet map",
    //               path: "/restaurant/listing/map/leaflet-map",
    //               type: "link",
    //               level: 4,
    //             },
    //           ]
    //         },
    //         {
    //           title: "map modal",
    //           type: "sub",
    //           active: false,
    //           level: 3,
    //           children: [
    //             {
    //               title: "google map",
    //               path: "/restaurant/listing/map-modal/google-map",
    //               type: "link",
    //               level: 4,
    //             },
    //             {
    //               title: "leaflet map",
    //               path: "/restaurant/listing/map-modal/leaflet-map",
    //               type: "link",
    //               level: 4,
    //             },
    //           ]
    //         },
    //         {
    //           title: "onclick map",
    //           type: "sub",
    //           active: false,
    //           level: 3,
    //           children: [
    //             {
    //               title: "google map",
    //               path: "/restaurant/listing/onclick-map/google-map",
    //               type: "link",
    //               level: 4,
    //             },
    //             {
    //               title: "leaflet map",
    //               path: "/restaurant/listing/onclick-map/leaflet-map",
    //               type: "link",
    //               level: 4,
    //             },
    //           ]
    //         },
    //         {
    //           title: "left side map",
    //           type: "sub",
    //           active: false,
    //           level: 3,
    //           children: [
    //             {
    //               title: "google map",
    //               path: "/restaurant/listing/left-side-map/google-map",
    //               type: "link",
    //               level: 4,
    //             },
    //             {
    //               title: "leaflet map",
    //               path: "/restaurant/listing/left-side-map/leaflet-map",
    //               type: "link",
    //               level: 4,
    //             },
    //           ]
    //         },
    //         {
    //           title: 'full width',
    //           path: '/restaurant/listing/full-width',
    //           type: 'link',
    //           level: 3,
    //         },
    //         {
    //           title: 'image slider',
    //           path: '/restaurant/listing/image-slider',
    //           type: 'link',
    //           level: 3,
    //         },
    //         {
    //           title: 'not found',
    //           path: '/restaurant/listing/not-found',
    //           type: 'link',
    //           level: 3,
    //         },
    //       ]
    //     },
    //     {
    //       title: "single page",
    //       type: "sub",
    //       active: false,
    //       level: 2,
    //       children: [
    //         {
    //           title: 'classic',
    //           path: '/restaurant/single-page/classic',
    //           type: 'link',
    //           level: 3,
    //         },
    //         {
    //           title: 'image slider',
    //           path: '/restaurant/single-page/image-slider',
    //           type: 'link',
    //           level: 3,
    //         },
    //         {
    //           title: 'left cart',
    //           path: '/restaurant/single-page/left-cart',
    //           type: 'link',
    //           level: 3,
    //         },
    //       ]
    //     },
    //     {
    //       title: "booking",
    //       type: "sub",
    //       active: false,
    //       level: 2,
    //       children: [
    //         {
    //           title: 'checkout',
    //           path: '/restaurant/booking/checkout',
    //           type: 'link',
    //           level: 3,
    //         },
    //         {
    //           title: 'order failed',
    //           path: '/restaurant/booking/order-failed',
    //           type: 'link',
    //           level: 3,
    //         },
    //         {
    //           title: 'order success',
    //           path: '/restaurant/booking/order-success',
    //           type: 'link',
    //           level: 3,
    //         },
    //       ]
    //     }
    //   ]
    // },

    {
      title: "Visa",
      type: "sub",
      active: false,
      level: 1,
      children: [
        {
          title: 'Instant Visa',
          path: '/instant-visa',
          type: 'link',
          
        },
        {
          title: 'Apply Visa',
          path: '/apply-visa',
          type: 'link',
        },
      ]
    },

    {
      title: 'pages',
      type: 'sub',
      level: 1,
      active: false,
      megaMenu: true,
      children: [
        {
          title: 'portfolio',
          active: false,
          children: [
            {
              title: '2 grid',
              path: '/page/portfolio/2-grid',
              type: 'link',
            },
            {
              title: '3 grid',
              path: '/page/portfolio/3-grid',
              type: 'link',
            },
            {
              title: '4 grid',
              path: '/page/portfolio/4-grid',
              type: 'link',
            },
            {
              title: '2 grid title',
              path: '/page/portfolio/2-grid-title',
              type: 'link',
            },
            {
              title: '3 grid title',
              path: '/page/portfolio/3-grid-title',
              type: 'link',
            },
            {
              title: '4 grid title',
              path: '/page/portfolio/4-grid-title',
              type: 'link',
            },
            {
              title: '3 masonry',
              path: '/page/portfolio/3-masonry',
              type: 'link',
            },
            {
              title: '4 masonry',
              path: '/page/portfolio/4-masonry',
              type: 'link',
            },
            {
              title: 'parallax',
              path: '/page/portfolio/parallax',
              type: 'link',
            },
            {
              title: 'center slides',
              path: '/page/portfolio/center-slide',
              type: 'link',
            },
            {
              title: 'creative 1',
              path: '/page/portfolio/creative-1',
              type: 'link',
            },
            {
              title: 'creative 2',
              path: '/page/portfolio/creative-2',
              type: 'link',
            },
            {
              title: 'creative 3',
              path: '/page/portfolio/creative-3',
              type: 'link',
              badgeIcon: true,
            },
            {
              title: 'creative 4',
              path: '/page/portfolio/creative-4',
              type: 'link',
            }
          ],
        },
        {
          title: 'blog page',
          active: false,
          children: [
            {
              title: 'left sidebar',
              path: '/page/blog-page/left-sidebar',
              type: 'link',
            },
            {
              title: 'right sidebar',
              path: '/page/blog-page/right-sidebar',
              type: 'link',
            },
            {
              title: 'no sidebar',
              path: '/page/blog-page/no-sidebar',
              type: 'link',
            },
            {
              title: 'creative left sidebar',
              path: '/page/blog-page/creative-left-sidebar',
              type: 'link',
            },
            {
              title: 'creative right sidebar',
              path: '/page/blog-page/creative-right-sidebar',
              type: 'link',
            },
            {
              title: 'creative  no sidebar',
              path: '/page/blog-page/creative-no-sidebar',
              type: 'link',
            },
            {
              title: 'list left sidebar',
              path: '/page/blog-page/list-left-sidebar',
              type: 'link',
            },
            {
              title: 'list right sidebar',
              path: '/page/blog-page/list-right-sidebar',
              type: 'link',
            },
            {
              title: 'list no sidebar',
              path: '/page/blog-page/list-no-sidebar',
              type: 'link',
            },
            {
              title: 'masonry left sidebar',
              path: '/page/blog-page/masonry-left-sidebar',
              type: 'link',
            },
            {
              title: 'masonry right sidebar',
              path: '/page/blog-page/masonry-right-sidebar',
              type: 'link',
            },
            {
              title: 'masonry no sidebar',
              path: '/page/blog-page/masonry-no-sidebar',
              type: 'link',
            },
            {
              title: 'mix list left sidebar',
              path: '/page/blog-page/mix-list-left-sidebar',
              type: 'link',
            },
            {
              title: 'mix list right sidebar',
              path: '/page/blog-page/mix-list-right-sidebar',
              type: 'link',
            },
            {
              title: 'mix grid left sidebar',
              path: '/page/blog-page/mix-grid-left-sidebar',
              type: 'link',
            },
            {
              title: 'mix grid right sidebar',
              path: '/page/blog-page/mix-grid-right-sidebar',
              type: 'link',
            },
          ],
        },
        {
          section: [
            {
              title: 'blog detail pages',
              active: false,
              children: [
                {
                  title: 'left sidebar',
                  path: '/page/blog-detail/left-sidebar',
                  type: 'link',
                },
                {
                  title: 'right sidebar',
                  path: '/page/blog-detail/right-sidebar',
                  type: 'link',
                },
                {
                  title: 'no sidebar',
                  path: '/page/blog-detail/no-sidebar',
                  type: 'link',
                },
                {
                  title: 'detail with gallery',
                  path: '/page/blog-detail/detail-with-gallery',
                  type: 'link',
                },
                {
                  title: 'detail with video',
                  path: '/page/blog-detail/detail-with-video',
                  type: 'link',
                },
              ],
            },
            {
              title: 'elements - filter',
              active: false,
              children: [
                {
                  title: 'sidebar',
                  path: '/page/element-filter/sidebar',
                  type: 'link',
                },
                {
                  title: 'popup',
                  path: '/page/element-filter/popup',
                  type: 'link',
                },
                {
                  title: 'slide down',
                  path: '/page/element-filter/slide-down',
                  type: 'link',
                },
                {
                  title: 'top filter',
                  path: '/page/element-filter/top-filter',
                  type: 'link',
                },
              ],
            },
            {
              title: 'elements - breadcrumb',
              active: false,
              children: [
                {
                  title: 'basic',
                  path: '/page/element-breadcrumb/basic',
                  type: 'link',
                },
                {
                  title: 'image with effect',
                  path: '/page/element-breadcrumb/image-with-effect',
                  type: 'link',
                },
                {
                  title: 'right content',
                  path: '/page/element-breadcrumb/right-content',
                  type: 'link',
                },
                {
                  title: 'only image',
                  path: '/page/element-breadcrumb/only-image',
                  type: 'link',
                },
                {
                  title: 'with searchbar',
                  path: '/page/element-breadcrumb/with-searchbar',
                  type: 'link',
                },
                {
                  title: 'bird flying',
                  path: '/page/element-breadcrumb/bird-flying',
                  type: 'link',
                },
              ],
            },
          ],
        },
        {
          section: [
            {
              title: 'other pages',
              active: false,
              children: [
                {
                  title: 'About us 1',
                  path: '/page/other-pages/about-us-1',
                  type: 'link',
                },
                {
                  title: 'About us 2',
                  path: '/page/other-pages/about-us-2',
                  type: 'link',
                },
                {
                  title: 'contact us 1',
                  path: '/page/other-pages/contact-us-1',
                  type: 'link',
                },
                {
                  title: 'contact us 2',
                  path: '/page/other-pages/contact-us-2',
                  type: 'link',
                },
                {
                  title: 'contact us 3',
                  path: '/page/other-pages/contact-us-3',
                  type: 'link',
                },
                {
                  title: 'coming soon 1',
                  path: '/page/other-pages/coming-soon-1',
                  type: 'link',
                },
                {
                  title: 'coming soon 2',
                  path: '/page/other-pages/coming-soon-2',
                  type: 'link',
                },
                {
                  title: 'coming soon 3',
                  path: '/page/other-pages/coming-soon-3',
                  type: 'link',
                },
                {
                  title: '404',
                  path: '/page/other-pages/404',
                  type: 'link',
                },
                {
                  title: 'FAQ',
                  path: '/page/other-pages/faq',
                  type: 'link',
                },
                {
                  title: 'log in',
                  path: '/page/other-pages/log-in',
                  type: 'link',
                },
                {
                  title: 'register',
                  path: '/page/other-pages/register',
                  type: 'link',
                },
                {
                  title: 'user dashboard',
                  path: '/page/other-pages/user-dashboard',
                  type: 'link',
                  badgeIcon: true,
                },
              ],
            },
            {
              title: 'Email template',
              active: false,
              children: [
                {
                  title: 'offer',
                  path: 'https://themes.pixelstrap.com/rica/email-template/offer.html',
                  type: 'extTabLink',
                },
                {
                  title: 'confirmation',
                  path: 'https://themes.pixelstrap.com/rica/email-template/confirmation.html',
                  type: 'extTabLink',
                },
                {
                  title: 'thank you',
                  path: 'https://themes.pixelstrap.com/rica/email-template/thankyou.html',
                  type: 'extTabLink',
                },
              ],
            },
          ],
        },
        {
          title: 'element pages',
          active: false,
          children: [
            {
              title: 'image ratio',
              path: '/page/element-pages/image-ratio',
              type: 'link',
              badgeIcon: true,
            },
            {
              title: 'about',
              path: '/page/element-pages/about',
              type: 'link',
            },
            {
              title: 'application',
              path: '/page/element-pages/application',
              type: 'link',
            },
            {
              title: 'blog',
              path: '/page/element-pages/blog',
              type: 'link',
            },
            {
              title: 'button',
              path: '/page/element-pages/button',
              type: 'link',
            },
            {
              title: 'category',
              path: '/page/element-pages/category',
              type: 'link',
            },
            {
              title: 'date & time picker',
              path: '/page/element-pages/date-time-picker',
              type: 'link',
            },
            {
              title: 'full banner',
              path: '/page/element-pages/full-banner',
              type: 'link',
            },
            {
              title: 'gallery',
              path: '/page/element-pages/gallery',
              type: 'link',
            },
            {
              title: 'other element',
              path: '/page/element-pages/other-element',
              type: 'link',
            },
            {
              title: 'service',
              path: '/page/element-pages/service',
              type: 'link',
            },
            {
              title: 'subscribe',
              path: '/page/element-pages/subscribe',
              type: 'link',
            },
            {
              title: 'testimonial',
              path: '/page/element-pages/testimonial',
              type: 'link',
            },
            {
              title: 'title',
              path: '/page/element-pages/title',
              type: 'link',
            },
            {
              title: 'video',
              path: '/page/element-pages/video',
              type: 'link',
            },
          ],
        },
      ],
    },
  ]
}
