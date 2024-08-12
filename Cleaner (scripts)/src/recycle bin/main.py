import win32com.client


def empty_recycle_bin():
    shell = win32com.client.Dispatch("Shell.Application")
    recycle_bin = shell.Namespace(10)
    # 10 = recicle bin
    if recycle_bin:
        items = recycle_bin.Items()
        for item in items:
            item.InvokeVerb("delete")
        print("Papelera de reciclaje vaciada.")
    else:
        print("No se pudo acceder a la papelera de reciclaje.")


empty_recycle_bin()
