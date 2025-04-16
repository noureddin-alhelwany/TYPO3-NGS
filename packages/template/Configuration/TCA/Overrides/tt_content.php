<?php
defined('TYPO3') or die();

$removeTypes = ['ce_card', 'ce_slider', 'ce_randomizer', 'ce_randomizer', 'ce_tabs', 'ce_accordion', 'ce_grid', 'ce_tile_unit', 'ce_container'];
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'] = array_filter(
    $GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'],
    function ($item) use ($removeTypes) {
        return !in_array($item['value'] ?? null, $removeTypes, true);
    }
);

foreach ($removeTypes as $type) {
    unset($GLOBALS['TCA']['tt_content']['types'][$type]);
}
