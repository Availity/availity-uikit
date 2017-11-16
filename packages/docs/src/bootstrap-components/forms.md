---
category: Forms
title: Default
---
<div class="docs-example">
  <div class="card">
    <div class="card-body">
      <form>
        <h5 class="card-title-secondary">Request Information</h5>
        <div class="form-group">
          <label for="memberID">
            Member ID
            <span class="inline-help" data-toggle="tooltip" data-placement="top" title="" data-original-title="Lorem ipusm cornaer vel eu leo. cum soclies nasctuere abl ultriceis vehiclula et magins.">
              What's this
            </span>
          </label>
          <input type="text" class="form-control" id="memberID" placeholder="">
        </div>
        <div class="form-group">
          <label for="relationshipToSubscriber">
            Relationship to Subscriber
            <span class="inline-help" data-toggle="tooltip" data-placement="top" data-original-title="Lorem ipusm cornaer vel eu leo. cum soclies nasctuere abl ultriceis vehiclula et magins.">
              What's this
            </span>
          </label>
          <select class="custom-select custom-block" id="relationshipToSubscriber">
            <option>Select one</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="datetimepicker7">
            Date of Birth
          </label>
          <input type="text" class="form-control" id="datetimepicker7" placeholder="mm/dd/yyyy">
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-4">
              <label for="serviceQuantity">
                Service Quantity
              </label>
              <input type="text" id="serviceQuantity" class="form-control">
            </div>
            <div class="col-sm-8">
              <label for="serviceType">
                Service Type
              </label>
              <select class="custom-select custom-block" id="serviceType">
                <option>Select one</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-controls">
          <input type="submit" class="btn btn-default" value="Cancel">
          <input type="submit" class="btn btn-default" value="Ok">
          <input type="submit" class="btn btn-default" value="Maybe">
          <input type="submit" class="btn btn-primary form-controls-right" value="Save">
        </div>
      </form>
    </div>
  </div>
</div>
