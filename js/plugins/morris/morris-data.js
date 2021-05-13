$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            SberBank: 2666,
            TinkoffBank: null,
            AlfaBank: 2647
        }, {
            period: '2010 Q2',
            SberBank: 2778,
            TinkoffBank: 2294,
            AlfaBank: 2441
        }, {
            period: '2010 Q3',
            SberBank: 4912,
            TinkoffBank: 1969,
            AlfaBank: 2501
        }, {
            period: '2010 Q4',
            SberBank: 3767,
            TinkoffBank: 3597,
            AlfaBank: 5689
        }, {
            period: '2011 Q1',
            SberBank: 6810,
            TinkoffBank: 1914,
            AlfaBank: 2293
        }, {
            period: '2011 Q2',
            SberBank: 5670,
            TinkoffBank: 4293,
            AlfaBank: 1881
        }, {
            period: '2011 Q3',
            SberBank: 4820,
            TinkoffBank: 3795,
            AlfaBank: 1588
        }, {
            period: '2011 Q4',
            SberBank: 15073,
            TinkoffBank: 5967,
            AlfaBank: 5175
        }, {
            period: '2012 Q1',
            SberBank: 10687,
            TinkoffBank: 4460,
            AlfaBank: 2028
        }, {
            period: '2012 Q2',
            SberBank: 8432,
            TinkoffBank: 5713,
            AlfaBank: 1791
        }],
        xkey: 'period',
        ykeys: ['SberBank', 'TinkoffBank', 'AlfaBank'],
        labels: ['SberBank', 'TinkoffBank', 'AlfaBank'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
