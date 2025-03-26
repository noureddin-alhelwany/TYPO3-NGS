<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'template',
    'description' => 'contains main assets to build website',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '13.4.0-13.4.99',
            'fluid_styled_content' => '13.4.0-13.4.99',
            'rte_ckeditor' => '13.4.0-13.4.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'NgsIt\\Template\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Noureddin Alhelwany',
    'author_email' => 'noureddin.alhelwany@gmail.com',
    'author_company' => 'NGS-IT',
    'version' => '1.0.0',
];
