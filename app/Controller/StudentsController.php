<?php
/**
 * Created by PhpStorm.
 * Student: HG
 * Date: 09/03/2017
 * Time: 17:58
 */
App::uses('AppController', 'Controller');
class StudentsController extends AppController {
    public $components = array('Paginator');
    public $name = 'Students';

    public function index() {
        $this->Student->recursive = 0;

        $this->set('Students', $this->Student->find('all',array('conditions' => array('deleted' => 0))));
    }

    public function add(){
        if ($this->request->is('post')){
            if ($this->request->data){
                $d=$this->request->data;
                $d['Student']['matricule']=$d['Student']['code'];
                $d['Student']['deleted']=0;
                // debug($d);die();
                if ($this->Student->save($d,false)) {
                    $this->Session->setFlash(__('Student saved successfuly'), 'alert', array(
                        'plugin' => 'BoostCake',
                        'class' => 'alert-sucess'
                    ));
                    return $this->redirect(array('action' => 'index'));
                } else {
                    $this->Session->setFlash(__('Unable to add Student. Please, try again.'));
                }
            }
        }
    }

    public function edit($id = null) {
        if (!$this->Student->exists($id)) {
            //throw new NotFoundException(__('Post invalide ou inexistant'));
            $this->Session->setFlash(__('The referenced student does not exists'), 'alert', array(
                'plugin' => 'BoostCake',
                'class' => 'alert-danger'
            ));
            return $this->redirect(array('action' => 'index'));
        }

            if($this->request->is(array('post', 'put'))){
                //save Student
                $d=$this->request->data;
                $d['Student']['matricule']=$id;
                if( $this->Student->save( $d ) ){

                    $this->Session->setFlash(__('Student edited successfuly'), 'alert', array(
                        'plugin' => 'BoostCake',
                        'class' => 'alert-sucess'
                    ));
                    return $this->redirect(array('action' => 'index'));

                }else{
                    $this->Session->setFlash('Unable to edit Student. Please, try again.');
                }

            }else{

                $options = array('conditions' => array('Student.' . $this->Student->primaryKey => $id));
                $this->request->data = $this->Student->find('first', $options);

            }

    }

    public function delete($id = NULL) {
        if (!$this->Student->exists($id)) {
            //throw new NotFoundException(__('Post invalide ou inexistant'));
            $this->Session->setFlash(__('The referenced student does not exists'), 'alert', array(
                'plugin' => 'BoostCake',
                'class' => 'alert-danger'
            ));
            return $this->redirect(array('action' => 'index'));
        }

            //save Student
            $d=$this->request->data;
            $d['Student']['matricule']=$id;
            $d['Student']['deleted']=1;
            if( $this->Student->save( $d ) ){

                $this->Session->setFlash(__('Student deleted successfuly'), 'alert', array(
                    'plugin' => 'BoostCake',
                    'class' => 'alert-sucess'
                ));
                return $this->redirect(array('action' => 'index'));

            }else{
                $this->Session->setFlash('Unable to delete Student. Please, try again.');
            }

    }
}
?>
