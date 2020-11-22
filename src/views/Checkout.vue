<template>
<section class="container mx-auto" style="margin:10px;width:500px;">
  <div style="text-align:center;margin:10px">
        <ul class="list-group">
            <li class="list-group-item">
                Please give us your details for ordering.We will meet to soon.
            </li>
        </ul>
    </div>
  <div class="modal-body">
       <form actoin="/check-out" method="post">
        <label >Address</label>
        <input type="text" class="form-control" placeholder="ex:Dhaka,Mirpur10" name="address" required>
        <label >Phone</label>
        <input type="text" class="form-control" name="phone" placeholder="088+" required>
        <div style="text-align:center;margin:10px">
          <button class="btn btn-success">Check Out</button>
        </div>
        
      </form>
  </div>
</section>

</template>

<script>
export default {
}
</script>