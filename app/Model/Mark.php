<?php
/**
 * Created by PhpStorm.
 * User: HG
 * Date: 10/03/2017
 * Time: 13:12
 */
class Mark extends AppModel
{
    public $primaryKey = 'id';

    public $belongsTo = array(
        'Student' => array(
            'className' => 'Student',
            'foreignKey' => 'matricule',
            'conditions' => '',
            'fields' => '',
            'order' => ''
        )
    );

}