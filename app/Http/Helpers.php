<?php

/**
 * @param $sql
 * @param $select
 * @param $page -> current page no.
 * @param $perPage
 * @return array
 */
function getPage($sql, $select, $page, $perPage)
{
    $total = $sql->count();
    if (!empty($select)) {
        $sql = $sql->select($select);
    }
    $problems = $sql->offset(($page - 1) * $perPage)->limit($perPage)->get();
    return array_merge(['content' => $problems], ['total' => $total]);
}