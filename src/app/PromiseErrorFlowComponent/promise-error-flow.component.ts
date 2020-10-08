import { Component } from "@angular/core";

@Component({
	selector: 'promise-error-flow',
	templateUrl: './promise-error-flow.component.html',
	styleUrls: [ './promise-error-flow.component.css' ]
})
export class PromiseErrorFlowComponent  {
  getPromise(throwFromFunction: boolean,
             throwFromPromise: boolean,
             hasToBeResolved: boolean){
    console.log('Start getPromise...');
    if (throwFromFunction){
      throw new Error('throw error from function');
    }
    return new Promise(
      (resolve, reject) => {
        if (throwFromPromise) {
          throw new Error('throw error from promise');
        }
        if(hasToBeResolved){
          console.log('resolve promise');
          resolve();
        }
        else {
          console.log('reject promise');
          reject();
        }
      });
    console.log('...End getPromise...');
  }

  onTestPromiseButtonClick(){
    console.clear();
    console.log('Start onTestPromiseButtonClick...');
    this.getPromise(false,false,true).then(
      () => { console.log('End promise then (hasToBeResolved)'); }
    ).catch(
      () => { console.log('End promise catch (hasToBeResolved)'); }
    );
    this.getPromise(false,false,false).then(
      () => { console.log('End promise then (hasToBeRejected)'); }
    ).catch(
      () => { console.log('End promise catch (hasToBeRejected)'); }
    );
    console.log('...End onTestPromiseButtonClick...');
  }

  onTestUncaughtErrorFromFunctionPromiseButtonClick() {
    console.clear();
    console.log('Start onTestUncaughtErrorFromFunctionPromiseButtonClick...');
    this.getPromise(true,false,false).then(
      () => { console.log('End promise then'); }
    ).catch(
      () => { console.log('End promise catch'); }
    );
    console.log('...End onTestUncaughtErrorFromFunctionPromiseButtonClick');
  }

  onTestUncaughtErrorFromInsidePromiseButtonClick(){
    console.clear();
    console.log('Start onTestUncaughtErrorFromInsidePromiseButtonClick...');
    console.log('...Uncaught error from inside with resolve...');
    this.getPromise(false,true,true).then(
      () => { console.log('End promise then (resolve)'); }
    );
    console.log('...Uncaught error from inside with reject...');
    this.getPromise(false,true,false).then(
      () => { console.log('End promise then (reject)'); }
    );
    console.log('...End onTestUncaughtErrorFromInsidePromiseButtonClick');
  }

  onTestCaughtErrorFromFunctionPromiseButtonClick(){
    console.clear();
    console.log('Start onTestCaughtErrorFromFunctionPromiseButtonClick...');
    try {
      this.getPromise(true,false,false).then(
        () => { console.log('End promise then'); }
      ).catch(
        () => { console.log('End promise catch'); }
      );
    }
    catch(error){
      console.log('Properly caught error : '+error.message);
    }
    console.log('...End onTestCaughtErrorFromFunctionPromiseButtonClick');
  }

  onTestCaughtErrorFromInsidePromiseButtonClick(){
    console.clear();
    console.log('Start onTestCaughtErrorFromInsidePromiseButtonClick...');
    try {
      this.getPromise(false,true,false).then(
        () => { console.log('End promise then'); }
      ).catch(
        (reason) => { console.log('End promise catch reason : '+reason.message); }
      );
    }
    catch(error){
      console.log('Properly caught error : '+error.message);
    }
    console.log('...End onTestCaughtErrorFromInsidePromiseButtonClick');
  }
}