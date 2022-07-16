export interface GetResterauntRequest {
    created: { $date: 1657970649669 };
    expires_in_seconds: 900;
    filtering: { filters: [[{}]] };
    name: 'restaurants';
    page_title: 'Restaurants';
    sections: [
        {
            items: [];
            link: [];
            name: 'Categories_Tel Aviv';
            template: 'banner-small';
            title: 'Categories';
        },
        {
            items: Resteraunts[];
            link: [];
            name: 'restaurants-delivering-venues';
            template: 'venue-vertical-list';
            title: 'All restaurants';
        }
    ];
    show_large_title: true;
    show_map: true;
    sorting: { sortables: [[{}], [{}], [{}], [{}]] };
    track_id: 'discovery:restaurants';
}

export interface Resteraunts {
    filtering: { filters: [] };
    image: {
        blurhash: 'j2sSJG00bLKRsPTtcPlj5bncX5mC';
        url: 'https://prod-wolt-venue-images-cdn.wolt.com/6061ea8498f521e95106eee7/140795a8-9150-11eb-9c08-3271e8e517ec__________.jpg';
        variants: [];
    };
    link: {
        target: '6061ea8498f521e95106eee7';
        target_sort: 'default';
        target_title: '';
        title: '';
        type: 'venue-id';
        venue_mainimage_blurhash: 'j5yT1w0z5dXb;ITccPd6jLOYTtdl';
    };
    sorting: { sortables: [] };
    template: 'venue-large';
    title: "Rocco's";
    track_id: 'venue-roccos';
    venue: {
        address: 'אלוף מגן 3, תל אביב';
        badges: [];
        categories: [];
        city: '';
        country: 'ISR';
        currency: 'ILS';
        delivers: true;
        delivery_price: '₪10.00';
        delivery_price_highlight: false;
        delivery_price_int: 1000;
        estimate: 35;
        estimate_range: '30-40';
        franchise: '';
        id: '6061ea8498f521e95106eee7';
        location: [];
        name: "Rocco's";
        online: true;
        price_range: 2;
        product_line: 'restaurant';
        rating: [Object];
        short_description: 'Italian American Sandwich';
        show_wolt_plus: false;
        slug: 'roccos';
        tags: string[];
    };
}
