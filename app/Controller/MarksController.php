<?php
/**
 * Created by PhpStorm.
 * User: HG
 * Date: 10/03/2017
 * Time: 13:12
 */
App::uses('AppController', 'Controller');
class MarksController extends AppController
{
    public $components = array('Paginator');
    public $name = 'Marks';

    public function index() {
        $this->Mark->recursive = 0;
        // debug($this->Paginator->paginate('Employe'));
        /*$this->Paginator->settings(array(
                'limit' => 15,
                'conditions' => array(
                    'deleted' => 0
                ))
        );
        $this->set('Students', $this->Paginator->paginate('Student'));*/
        $this->set('Marks', $this->Mark->find('all'));
    }
    public function add()
    {
        if ($this->request->is('post')) {
            $d = $this->request->data;
            $d['Mark']['id'] = null;
            $d['Mark']['matricule'] = $d['Mark']['Student'];
            //debug( $d['Mark']);
            //die();

            if ($this->Mark->save($d['Mark'])) {
                $this->Session->setFlash(__('Mark Added'), 'alert', array(
                    'plugin' => 'BoostCake',
                    'class' => 'alert-success'
                ));
                return $this->redirect(array('action' => 'index', 'controller' => 'Marks'));
            } else {
                $this->Session->setFlash(__('Error'), 'alert', array(
                    'plugin' => 'BoostCake',
                    'class' => 'alert-danger'
                ));
            }
        }
        $students = $this->Mark->Student->find('list', array(
            'conditions' => array(
                'deleted' => 0
            )
        ));
        $this->set(compact('students'));
    }
}