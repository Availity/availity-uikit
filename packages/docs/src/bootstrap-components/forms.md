---
category: Forms
title: Default
---
  <div class="card">
    <div class="card-body">
      <form>
        <h5 class="card-title-secondary">Request Information</h5>
        <div class="form-group">
          <label for="memberID" id="memberID-label">
            Member ID
            </label>
            <a href="#Forms-Inline-Help" class="icon icon-help-circle icon-1x text-primary" tabindex="0" aria-label="help" aria-describedby="memberID-label"></a>
          <input type="text" class="form-control" id="memberID" placeholder="">
        </div>
        <div class="form-group">
          <label for="relationshipToSubscriber" id="relationshipToSubscriber-label">
            Relationship to Subscriber
          </label>
          <a href="#Forms-Inline-Help" class="icon icon-help-circle icon-1x text-primary" tabindex="0" aria-label="help" aria-describedby="relationshipToSubscriber-label"></a>
          <select class="form-control custom-select custom-block" id="relationshipToSubscriber">
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
              <select class="form-control custom-select custom-block" id="serviceType">
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
