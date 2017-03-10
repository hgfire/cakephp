<?php
/**
 * Created by PhpStorm.
 * Student: HG
 * Date: 09/03/2017
 * Time: 18:09
 */

class Student extends AppModel {
    public $virtualFields = array(
        'affichage' => 'CONCAT(Student.lastname, " ", Student.firstname)'
    );
    public $name = 'Student';
    public $displayField = 'affichage';
    public $primaryKey = 'matricule';
    public $validate = array(
        'matricule' => array(
            'notEmpty' => array(
                'rule' => array('notEmpty'),
                'message' => 'You must enter a matricule',
                'allowEmpty' => false,
                'required' => true,
                'isUnique' => array(
                    'rule' => 'isUnique',
                    'message' => 'Used by another one'
                ),
                //'last' => false, // Stop validation after this rule
                //'on' => 'create', // Limit validation to 'create' or 'update' operations
            ),
        )
    );
    public $hasMany = array(
        'Mark' => array(
            'className' => 'Mark',
            'foreignKey' => 'matricule',
            'dependent' => false,
            'conditions' => '',
            'fields' => '',
            'order' => '',
            'limit' => '',
            'offset' => '',
            'exclusive' => '',
            'finderQuery' => '',
            'counterQuery' => ''
        )
    );
    /*
    public $validate = array(
        'firstname'=>array(
            'Please enter your name.'=>array(
                'rule'=>'notEmpty',
                'message'=>'Please enter your name.'
            )
        ),
        'Studentname'=>array(
            'The Studentname must be between 5 and 15 characters.'=>array(
                'rule'=>array('between', 5, 15),
                'message'=>'The Studentname must be between 5 and 15 characters.'
            ),
            'That Studentname has already been taken'=>array(
                'rule'=>'isUnique',
                'message'=>'That Studentname has already been taken.'
            )
        ),
        'email'=>array(
            'Valid email'=>array(
                'rule'=>array('email'),
                'message'=>'Please enter a valid email address'
            )
        )
    );
    */
}
?>