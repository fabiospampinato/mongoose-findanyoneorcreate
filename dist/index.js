/* FIND ANYONE OR CREATE */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findAnyoneOrCreate(schema) {
    schema.statics.findAnyoneOrCreate = function findAnyoneOrCreate(create) {
        return this.findOneOrCreate({}, create);
    };
}
/* EXPORT */
exports.default = findAnyoneOrCreate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsMkJBQTJCOzs7QUFFM0IsNEJBQThCLE1BQU07SUFFbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyw0QkFBOEIsTUFBTTtRQUV0RSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFFLENBQUM7SUFFN0MsQ0FBQyxDQUFBO0FBRUgsQ0FBQztBQUVELFlBQVk7QUFFWixrQkFBZSxrQkFBa0IsQ0FBQyJ9