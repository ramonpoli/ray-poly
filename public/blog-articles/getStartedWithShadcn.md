If you want to get started using Shadcn, a cool component library that will not install any npm packages in your project (only the small shadcn one), instead it will create components automatically based on your necessities, let’s have a look at it.

First of all you will need to install it, you can use it on any project that uses React (at the time of this post Oct 2024 version 19 gives an error, it might be fixed in the future). You can use *Next.js, Astro, Remix, Gatsby…*

```  
npx shadcn@latest init  
```

It requires tailwind, so if you’re using a project without it, it is necessary to install it, and uses class-variance-authority which is a relatively complex className injector.

From there, you can start creating your own components:

```  
npx shadcn@latest add button  
```

This command will include a new react component within your @/components folder. This code looks like this:

```

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(  
  ({ className, variant, size, asChild = false, ...props }, ref) => {  
    const Comp = asChild ? Slot : "button"  
    return (  
      <Comp  
        className={cn(buttonVariants({ variant, size, className }))}  
        ref={ref}  
        {...props}  
      />  
    )  
  }  
)  
Button.displayName = "Button"

export { Button, buttonVariants }

```

Let’s have a look into it:

* It creates a React ref instead of a component so you can pass down the reference from a parent component into it  
* It automatically creates two properties: size, and variant, which you can use to display different classes. Let’s dig into it. On top of this component you can see it uses  the package class-variance-authority to generate different strings for these 2 properties:

  ```

  const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )

  ```

  This might look intimidating but it’s simpler than it looks, firstly it assings a set of default tailwind classes: “inline-flex items-center justify-center…” and then another set for each of the variants: “bg-primary text-primary-foreground…” for the default variant, “bg-destructive text-destructive-foreground…” for the destructive variant and so on. Then it does the same with the size property. Assigning a default variant afterwards.


* It then uses the types you’ve set for each of the properties and assigns them to the property types of the component: 

  ```  
  export interface ButtonProps  
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,  
      VariantProps<typeof *buttonVariants*> {  
    asChild?: boolean  
  }
  ```

With the key word here being buttonVariants, is extracting the types that the function “cva(“ returns. So you can use them when you re-use this Button component.

And that’s about it, you can add many components to your project:   
Sidebar, New, Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Calendar, Card and so on.

The main advantage of this approach is quite obvious, it won’t install anything you don’t want to, keeping your node_modules small and keeping you in control of your components, with their source code inside your project, so you can make any changes you want.

The disadvantages of using this approach are: 

* It makes your components more complex and adds features you might not want to use, if tailwind is not your cup of tea, it’s probably not for you.  
* It might not be useful for junior developers, the steep curve of using tailwind and a complex component definition might not be the best approach for a general project that junior devs are working on. As, in my opinion, is not a great way to learn how to use css.  
* It’s not as easy to use as a component library. You need to search for the right component to add every time you need a new one, and make you modify it if there are features missing that are available in MaterialUI, chakra.ui etc.

In conclusion: if it is the right tool for you then use it, but it might not be the right choice for a scalable project with several junior devs working on it, as using a component library or creating your own components is easier to learn and re-use.
