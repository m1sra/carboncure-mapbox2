import Box0 from '../story-components/contentStory0/Box0';
import Box1 from '../story-components/contentStory1/Box1';
import Box10 from '../story-components/contentStory10/Box10';
import Box11 from '../story-components/contentStory11/Box11';
import Box12 from '../story-components/contentStory12/Box12';
import Box2 from '../story-components/contentStory2/Box2';
import Box2_2 from '../story-components/contentStory2-2/Box2_2';
import Box3 from '../story-components/contentStory3/Box3';
import Box4 from '../story-components/contentStory4/Box4';
import Box5 from '../story-components/contentStory5/Box5';
import Box6 from '../story-components/contentStory6/Box6';
import Box7 from '../story-components/contentStory7/Box7';
import Box8 from '../story-components/contentStory8/Box8';
import Box9 from '../story-components/contentStory9/Box9';
import Config from './types/Config';

export const config: Config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZG90dHlqayIsImEiOiJja20yNTRqMXUxNGtjMm5xbTBlYThqZHoyIn0.-DkFDlW3GlqYg5zWKOAegA',
    chapters: [
        {
            id: 'chapter1',
            numbreChapter: 1,
            location: {
                center: [-93.964, 39.317],
                zoom: 3.36,
                pitch: 0.00,
                bearing: 0.00,
                speed: 3,
            },
            component:Box0,
            onChapterEnter: [],
            onChapterEnterSecond: [],
            onChapterExit: [
                {
                    layer: '457-queens-fill',
                    opacity:'fill-opacity'
                },
                {
                    layer: '457-queens-line',
                    opacity:'line-opacity'
                },
                {
                    layer: 'central-concrete',
                    opacity:'circle-opacity'
                },
                {
                    layer: 'co2-plants',
                    opacity:'circle-opacity'
                },
                {
                    layer: 'carboncure-plants-usa',
                    opacity:'circle-opacity'
                },
                {
                    layer: 'carboncure-plants-local',
                    opacity:'circle-opacity'
                },
                {
                    layer: 'san-diego',
                    opacity:'line-opacity'
                },
                {
                    layer: 'west-coast',
                    opacity:'line-opacity'
                },
                {
                    layer: 'usa',
                    opacity:'line-opacity'
                },
            ],
            onChapterExitSecond: [],
            rotateAnimation: true,
        },
        {
            id: 'chapter2',
            numbreChapter:2,
            location: {
                center: [-97.58748, 38.55337],
                zoom: 3.53,
                pitch: 0.00,
                bearing: 0.00,
                speed: 0.3,
            },
            component:Box1,
            onChapterEnter: [
                {
                    layer: 'carboncure-plants-usa',
                    opacity:'circle-opacity'
                },
            ],
            onChapterExit: [
                {
                    layer: 'co2-plants',
                    opacity:'circle-opacity'
                },
            ],
            onChapterExitSecond: [],
            onChapterEnterSecond: [],
            rotateAnimation: false,
        },
        {
            id: 'chapter3',
            numbreChapter:3,
            location: {
                center: [- 121.90796, 37.34393],
                zoom: 8.5,
                pitch: 40.00,
                bearing: 0.00,
                speed: 0.5,
            },
            component:Box2,
            onChapterEnter: [
                {
                    layer: 'co2-plants',
                    opacity:'circle-opacity'
                },
            ],
            onChapterExit: [
                {
                    layer: 'carboncure-plants-usa',
                    opacity:'circle-opacity'
                },
            ],
            onChapterExitSecond: [],
            onChapterEnterSecond: [],
            rotateAnimation: false,
        },
        {
            id: 'chapter4',
            numbreChapter:4,
            location: {
                center: [- 121.90796, 37.34393],
                zoom: 8.5,
                pitch: 40.00,
                bearing: 0.00,
                speed: 0.5,
            },
            component:Box2_2,
            onChapterEnter: [
                {
                    layer: 'co2-plants',
                    opacity:'circle-opacity'
                },
            ],
            onChapterExit: [
                {
                    layer: 'carboncure-plants-usa',
                    opacity:'circle-opacity'
                },
            ],
            onChapterExitSecond: [],
            onChapterEnterSecond: [],
            rotateAnimation: false,
        },
        {
            id: 'chapter5',
            numbreChapter:5,
            location: {
                center: [-122.39987, 37.67987],
                zoom: 13.71,
                pitch: 40.00,
                bearing: 0.00,
                speed: 1,
            },
            component:Box3,
            onChapterEnter: [
                {
                    layer: 'co2-plants',
                    opacity:'circle-opacity'
                },
            ],
            onChapterExitSecond: [],
            onChapterEnterSecond: [],
            rotateAnimation: false,
            onChapterExit: []
        },
        {
            id: 'chapter6',
            numbreChapter:6,
            location: {
                center: [-122.39911, 37.68895],
                zoom: 17.38,
                pitch: 49.00,
                bearing: 0.00,
                speed: 2,
            },
            component:Box4,
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'co2-plants',
                    opacity:'circle-opacity'
                },
            ],
            onChapterExitSecond: [],
            onChapterEnterSecond: [],
            rotateAnimation: false,
        },
        {
            id: 'chapter7',
            numbreChapter:7,
            location: {
                center: [-122.39911, 37.68895],
                zoom: 17.38,
                pitch: 49.00,
                bearing: 0.00,
                speed: 3,
            },
            component:Box5,
            onChapterEnter: [],
            onChapterExit: [],
            onChapterEnterSecond: [],
            onChapterExitSecond: [],
            rotateAnimation: false,
        },
        {
            id: 'chapter8',
            numbreChapter:8,
            location: {
                center: [-122.37154, 37.79912],
                zoom: 8.5,
                pitch: 59.00,
                bearing: 9.39,
                speed: 3,
            },
            component:Box6,
            onChapterEnter: [
                {
                    layer: 'central-concrete',
                    opacity:'circle-opacity'
                },
            ],
            onChapterExit: [],
            onChapterExitSecond: [],
            onChapterEnterSecond: [],
            rotateAnimation: false,
        },
        {
            id: 'chapter9',
            numbreChapter:9,
            location: {
                center: [-121.90077, 37.37009],
                zoom: 15.82,
                pitch: 59.00,
                bearing: 0.00,
                speed: 3,
            },
            component:Box7,
            onChapterEnter: [
                {
                    layer: '457-queens-fill',
                    opacity:'fill-opacity'
                },
                {
                    layer: '457-queens-line',
                    opacity:'line-opacity'
                },
            ],
            onChapterExit: [
                {
                    layer: 'central-concrete',
                    opacity:'circle-opacity'
                },
            ],
            onChapterExitSecond: [],
            onChapterEnterSecond: [],
            rotateAnimation: false,
        },
        {
            id: 'chapter10',
            numbreChapter:10,
            location: {
                center: [-121.90077, 37.37009],
                zoom: 15.82,
                pitch: 59.00,
                bearing: 0.00,
                speed: 3,
            },
            component:Box8,
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'central-concrete',
                    opacity:'circle-opacity'
                },
            ],
            onChapterExitSecond: [],
            onChapterEnterSecond: [],
            rotateAnimation: false,
        },
        {
            id: 'chapter11',
            numbreChapter:11,
            location: {
                center: [-121.90077, 37.37009],
                zoom: 15.82,
                pitch: 59.00,
                bearing: 0.00,
                speed: 3,
            },
            component:Box9,
            onChapterEnter: [
                {
                    layer: '457-queens-fill',
                    opacity:'fill-opacity'
                },
                {
                    layer: '457-queens-line',
                    opacity:'line-opacity'
                },
            ],
            onChapterExit: [],
            onChapterExitSecond: [],
            onChapterEnterSecond: [],
            rotateAnimation: false,
        },
        {
            id: 'chapter12',
            numbreChapter:12,
            location: {
                center: [-121.85807, 37.33818],
                zoom: 12.57,
                pitch: 0,
                bearing: 0.00,
                speed: 3,
            },
            component:Box10,
            onChapterEnter: [
            ],
            onChapterExit: [
                {
                    layer: '457-queens-fill',
                    opacity:'fill-opacity'
                },
                {
                    layer: '457-queens-line',
                    opacity:'line-opacity'
                },
                {
                    layer: '457-queens-line',
                    opacity:'line-opacity'
                },
                {
                    layer: 'central-concrete',
                    opacity:'circle-opacity'
                },
                {
                    layer: 'san-diego',
                    opacity:'line-opacity'
                },
                {
                    layer: 'west-coast',
                    opacity:'line-opacity'
                },
                {
                    layer: 'usa',
                    opacity:'line-opacity'
                },
            ],
            onChapterExitSecond: [],
            onChapterEnterSecond: [],
            rotateAnimation: false,
        },
        {
            id: 'chapter13',
            numbreChapter:13,
            location: {
                center: [-122.34651, 37.75066],
                zoom: 8.5,
                pitch: 57.50,
                bearing: 12.80,
                speed: 0.9,
            },
            component:Box11,
            onChapterEnter: [
                {
                    layer: 'central-concrete',
                    opacity:'circle-opacity'
                },
                {
                    layer: 'san-diego',
                    opacity:'line-opacity'
                },
            ],
            onChapterExit: [
                // {
                //     layer: 'west-coast',
                //     opacity:'line-opacity',
                // },
                {
                    layer: 'usa',
                    opacity:'line-opacity'
                },
            ],
            onChapterExitSecond: [
                {
                    layer: 'central-concrete',
                    opacity:'circle-opacity',
                    time: 5
                },
                {
                    layer: 'san-diego',
                    opacity:'line-opacity',
                    time: 5
                },
            ],
            onChapterEnterSecond: [
                {
                    layer: 'west-coast',
                    opacity:'line-opacity',
                    time: 5,
                },
            ],
            rotateAnimation: false,
        },
        {
            id: 'chapter14',
            numbreChapter:14,
            location: {
                center: [-97.58748, 38.55337],
                zoom: 3.53,
                pitch: 0.00,
                bearing: 0.00,
                speed: 0.9,
            },
            component:Box12,
            onChapterEnter: [
                {
                    layer: 'usa',
                    opacity:'line-opacity'
                },
            ],
            onChapterEnterSecond: [],
            onChapterExit: [
                {
                    layer: 'central-concrete',
                    opacity:'circle-opacity'
                },
                {
                    layer: 'san-diego',
                    opacity:'line-opacity'
                },
                {
                    layer: 'west-coast',
                    opacity:'line-opacity'
                },
            ],
            onChapterExitSecond: [
                // {
                //     layer: 'usa',
                //     opacity:'line-opacity',
                //     time: 3,
                // },
                // {
                //     layer: 'west-coast',
                //     opacity:'line-opacity',
                //     time: 3,
                // },
                {
                    layer: 'usa',
                    opacity:'line-opacity',
                    time: 4,
                },
                {
                    layer: 'west-coast',
                    opacity:'line-opacity',
                    time: 4,
                },
                {
                    layer: 'usa',
                    opacity:'line-opacity',
                    time: 5,
                },
                {
                    layer: 'west-coast',
                    opacity:'line-opacity',
                    time: 5,
                },
                {
                    layer: 'usa',
                    opacity:'line-opacity',
                    time: 6,
                },
                {
                    layer: 'west-coast',
                    opacity:'line-opacity',
                    time: 6,
                },
                {
                    layer: 'usa',
                    opacity:'line-opacity',
                    time: 7,
                },
                {
                    layer: 'west-coast',
                    opacity:'line-opacity',
                    time: 7,
                },
                {
                    layer: 'usa',
                    opacity:'line-opacity',
                    time: 8,
                },
                {
                    layer: 'west-coast',
                    opacity:'line-opacity',
                    time: 8,
                },
                {
                    layer: 'usa',
                    opacity:'line-opacity',
                    time: 9,
                },
                {
                    layer: 'west-coast',
                    opacity:'line-opacity',
                    time: 9,
                },
            ],
            rotateAnimation: false,
        }
    ]
}

