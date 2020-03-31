// ===== Plan ===== 
let PlanPickerItemComponent = {
  template: "#plan-picker-item-template",

  props: {
    name: {
      type: String,
      required: true
    }, 
    
    selectedPlan: {
      type: String
    }
  }, 

  computed: {
    isSelected(){
      return this.name === this.selectedPlan;
    }, 

  }, 

  methods: {
    select(){
      this.$emit('select', this.name);
    }
  }
}; 


// ===== Plan-Picker =====
let PlanPickerComponent = {
  template: "#plan-picker-template", 

  components: {
    'plan-picker': PlanPickerItemComponent,
  }, 

  data() {
    return {
      plans: ["The Hacker", "The Single", "The Curious", "The Addict"], 
      selectedPlan: null,
    }
  }, 

  methods: {
    selectPlan(plan){
     this.selectedPlan = plan;
    }
  }
};


// ===== Root =====
new Vue({
  el: "#app",
  components: {
    PlanPicker: PlanPickerComponent,
  }, 
});
