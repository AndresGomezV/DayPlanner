import { Directive, ElementRef, OnInit, Input } from "@angular/core";

@Directive({
    standalone: true,
    selector: "[appHighlight]",
})
export class HighlightDirective implements OnInit {
    @Input() appHighlight: boolean = false;

    constructor(private el: ElementRef) {}

    ngOnInit() {
        if (this.appHighlight) {
            this.el.nativeElement.style.backgroundColor = "salmon";
        }
    }
}
