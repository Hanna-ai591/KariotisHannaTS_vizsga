export function LogAddition(
  target:any,
  propertyKey:String,
  descriptor: PropertyDescriptor
){
    const originalMethod = descriptor.value;
    descriptor.value = function (...args:any[]){
        console.log("Hozzáadás történt a listához");
        return originalMethod.apply(this, args);
        
    }
}